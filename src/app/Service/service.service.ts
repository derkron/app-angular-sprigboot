import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/productos';

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }
  createProducto(productos:Producto){
    return this.http.post<Producto>(this.Url,productos);
  }

  getProductoId(id:number){
    return this.http.get<Producto>(this.Url+"/"+id);
  }

  updateProducto(productos:Producto){
    return this.http.put<Producto>(this.Url+"/"+productos.id,productos);
  }

  deleteProducto(productos:Producto){
    return this.http.delete<Producto>(this.Url+"/"+productos.id);
  }
}
