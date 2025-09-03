import { Component } from '@angular/core';
import { ListadoPedidos } from '../../component/listado-pedidos/listado-pedidos';
import { Pedido } from '../../clases/pedido';

@Component({
  selector: 'app-home',
  imports: [ListadoPedidos],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
listado: Pedido[]=[ 
  {
    ID: 1,
    Transportista:"A",
    Destino: "123",
    Estado:"123",
    Fecha:"12-03-2025",
  },
  {
   ID: 2,
    Transportista:"B",
    Destino: "123",
    Estado:"123",
    Fecha:"12-03-2025",
  },
  {
    ID: 3,
    Transportista:"C",
    Destino: "123",
    Estado:"123",
    Fecha:"12-03-2025",
  },
]


ped : Pedido | null = null

verdetalleFinal(ped:Pedido){
    this.ped =ped;
  }
}


