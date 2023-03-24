import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  producto:Producto=new Producto();
  constructor (private router:Router,private service:ServiceService){}

  ngOnInit() {
    this.Editar();

  }
  Editar(){
    let id=localStorage.getItem("id")!;
    this.service.getProductoId(+id)
    .subscribe(data=>{
      this.producto=data;
    })
  }

  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se Actualizo con Exito");
      this.router.navigate(["listar"]);
    })
  }

}
