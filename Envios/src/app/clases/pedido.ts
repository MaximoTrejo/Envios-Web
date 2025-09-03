export class Pedido {
  ID:number= 0;
  Transportista:string ='' ;
  Destino:string ='';
  Estado:string ='';
  Fecha:string ='';

  constructor(ID:number ,Transportista:string,Destino:string,Estado:string,Fecha:string) {
    this.ID = ID;
    this.Transportista = Transportista;
    this.Destino =Destino;
    this.Estado =Estado;
    this.Fecha =Fecha;
  }

  toString() {
    return this.Transportista;
  }


}
