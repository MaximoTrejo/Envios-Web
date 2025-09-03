import { Component,input ,output } from '@angular/core';
import { Pedido } from '../../clases/pedido';

@Component({
  selector: 'app-listado-pedidos',
  imports: [],
  templateUrl: './listado-pedidos.html',
  styleUrl: './listado-pedidos.css'
})

export class ListadoPedidos {
  listadoHijo = input <Pedido[]>([]); 
  envioDeAlumno = output<Pedido>();

  verDetalle(ped: Pedido) {
    this.envioDeAlumno.emit(ped);
  }

}


// interface IAlumno {
//   nombre: string;
//   apellido: string;
//   legajo: number;
// }
