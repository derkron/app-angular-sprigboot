import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productos:Producto=new Producto();

  constructor(private router:Router,private service:ServiceService){}

  ngOnInit() {

  }

  Guardar(productos:Producto){
    this.service.createProducto(productos).subscribe(data=>{alert("Se agrego con Exito");
    this.router.navigate(["listar"]);
  })
  }

}
