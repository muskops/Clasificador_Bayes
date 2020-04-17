import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valDia: string;
  valDescuento:string;
  valEGratis:string;
  valCompra:string;
  constructor() {

  }

  matrix = [

  ];

  ngOnInit(){
    
  }



  llenarTabla(){
    var nuevo = {'Dia':this.valDia,'Descuento':this.valDescuento,'EntregaGratis':this.valEGratis,'Comprar':this.valCompra,};
    this.matrix.push(nuevo);
    var tabla = document.getElementById('tabla');
    var llenadoTabla = '';
    for(var ele of this.matrix){
      llenadoTabla += "<tr><th>"+ele.Dia+"</th><th>"+ele.Descuento+"</th><th>"+ele.EntregaGratis+"</th><th>"+ele.Comprar+"</th></tr>"
    }
    tabla.innerHTML = llenadoTabla;
  }

  eliminar(){
    this.matrix.pop();
    
  }
  total=0;
  //Comprar
  comprarSi=0;
  comprarNo=0;

  pcomprarSi=0;
  pcomprarNo=0;

  //Dia
    //Si
  diaEntreSemana_ComprarSi=0;
  diaDiaFestivo_ComprarSi=0;
  diaFinDeSemana_ComprarSi=0;

  pdiaEntreSemana_ComprarSi=0;
  pdiaDiaFestivo_ComprarSi=0;
  pdiaFinDeSemana_ComprarSi=0;
    //No
  diaEntreSemana_ComprarNo=0;
  diaDiaFestivo_ComprarNo=0;
  diaFinDeSemana_ComprarNo=0;

  pdiaEntreSemana_ComprarNo=0;
  pdiaDiaFestivo_ComprarNo=0;
  pdiaFinDeSemana_ComprarNo=0;

  //Descuento
    //Si
  descuentoSi_ComprarSi=0;
  descuentoNo_ComprarSi=0;

  pdescuentoSi_ComprarSi=0;
  pdescuentoNo_ComprarSi=0;

    //No
  descuentoSi_ComprarNo=0;
  descuentoNo_ComprarNo=0;

  pdescuentoSi_ComprarNo=0;
  pdescuentoNo_ComprarNo=0;
  //Entrega gratis
    //Si
  entregaSi_ComprarSi=0;
  entregaNo_ComprarSi=0;

  pentregaSi_ComprarSi=0;
  pentregaNo_ComprarSi=0;
    //No
  entregaSi_ComprarNo=0;
  entregaNo_ComprarNo=0;

  pentregaSi_ComprarNo=0;
  pentregaNo_ComprarNo=0;
  calcular(){    
    this.reiniciarValores();
    this.total = this.matrix.length;
    //Totales
    for(var value of this.matrix){
      if(value.Comprar == 'si')
        this.comprarSi++;
      if(value.Comprar == 'no')
        this.comprarNo++;
      if(value.Dia == 'entresemana'){
        if(value.Comprar == 'si')
          this.diaEntreSemana_ComprarSi++;
        if(value.Comprar == 'no')
          this.diaEntreSemana_ComprarNo++;
      }
      if(value.Dia == 'fin de semana'){
        if(value.Comprar == 'si')
          this.diaFinDeSemana_ComprarSi++;
        if(value.Comprar == 'no')
          this.diaFinDeSemana_ComprarNo++;
      }
      if(value.Dia == 'dia festivo'){
        if(value.Comprar == 'si')
          this.diaDiaFestivo_ComprarSi++;
        if(value.Comprar == 'no')
          this.diaDiaFestivo_ComprarNo++;
      }
      if(value.Descuento == 'si'){
        if(value.Comprar == 'si')
          this.descuentoSi_ComprarSi++;
        if(value.Comprar == 'no')
          this.descuentoSi_ComprarNo++;
      }
      if(value.Descuento == 'no'){
        if(value.Comprar == 'si')
          this.descuentoNo_ComprarSi++;
        if(value.Comprar == 'no')
          this.descuentoNo_ComprarNo++;
      }
      if(value.EntregaGratis == 'si'){
        if(value.Comprar == 'si')
          this.entregaSi_ComprarSi++;
        if(value.Comprar == 'no')
          this.entregaSi_ComprarNo++;
      }
      if(value.EntregaGratis == 'no'){
        if(value.Comprar == 'si')
          this.entregaNo_ComprarSi++;
        if(value.Comprar == 'no')
          this.entregaNo_ComprarNo++;
      }
    }

    //Probabilidades
    this.pcomprarSi = this.comprarSi/this.total;
    this.pcomprarNo = this.comprarNo/this.total;

    //Dias
    this.pdiaEntreSemana_ComprarSi = this.diaEntreSemana_ComprarSi/this.comprarSi;
    this.pdiaEntreSemana_ComprarNo = this.diaEntreSemana_ComprarNo/this.comprarNo;

    this.pdiaDiaFestivo_ComprarSi = this.diaDiaFestivo_ComprarSi/this.comprarSi;
    this.pdiaDiaFestivo_ComprarNo = this.diaDiaFestivo_ComprarNo/this.comprarNo;

    this.pdiaFinDeSemana_ComprarSi = this.diaFinDeSemana_ComprarSi/this.comprarSi;
    this.pdiaFinDeSemana_ComprarNo = this.diaFinDeSemana_ComprarNo/this.comprarNo;
    
    //Descuentos
    this.pdescuentoSi_ComprarSi = this.descuentoSi_ComprarSi/this.comprarSi;
    this.pdescuentoSi_ComprarNo = this.descuentoSi_ComprarNo/this.comprarNo;

    this.pdescuentoNo_ComprarSi = this.descuentoNo_ComprarSi/this.comprarSi;
    this.pdescuentoNo_ComprarNo = this.descuentoNo_ComprarNo/this.comprarNo;

    //Entrega gratis
    this.pentregaSi_ComprarSi = this.entregaSi_ComprarSi/this.comprarSi;
    this.pentregaSi_ComprarNo = this.entregaSi_ComprarNo/this.comprarNo;

    this.pentregaNo_ComprarSi = this.entregaNo_ComprarSi/this.comprarSi;
    this.pentregaNo_ComprarNo = this.entregaNo_ComprarNo/this.comprarNo;
    

    var tabla = document.getElementById('tablaResult');
    var llenadoTabla = '';

    llenadoTabla += "<tr><th></th><th>Comprar si</th><th>Comprar no</th></tr>";
    llenadoTabla += "<tr><th>Entresemana</th><th>"+this.diaEntreSemana_ComprarSi+"</th><th>"+this.diaEntreSemana_ComprarNo+"</th></tr>"+
    "<tr><th>Entresemana probabilidad</th><th>"+this.pdiaEntreSemana_ComprarSi.toFixed(4)+"</th><th>"+this.pdiaEntreSemana_ComprarNo.toFixed(4)+"</th></tr>"+
    "<tr><th>Dia festivo</th><th>"+this.diaDiaFestivo_ComprarSi+"</th><th>"+this.diaDiaFestivo_ComprarNo+"</th></tr>"+
    "<tr><th>Dia festivo probabilidad</th><th>"+this.pdiaDiaFestivo_ComprarSi.toFixed(4)+"</th><th>"+this.pdiaDiaFestivo_ComprarNo.toFixed(4)+"</th></tr>"+
    "<tr><th>Fin de semana</th><th>"+this.diaFinDeSemana_ComprarSi+"</th><th>"+this.diaFinDeSemana_ComprarNo+"</th></tr>"+
    "<tr><th>Fin de semana probabilidad</th><th>"+this.pdiaFinDeSemana_ComprarSi.toFixed(4)+"</th><th>"+this.pdiaFinDeSemana_ComprarNo.toFixed(4)+"</th></tr>"+
    "<tr><th>Descuento si</th><th>"+this.descuentoSi_ComprarSi+"</th><th>"+this.descuentoSi_ComprarNo+"</th></tr>"+
    "<tr><th>Descuento si probabilidad</th><th>"+this.pdescuentoSi_ComprarSi.toFixed(4)+"</th><th>"+this.pdescuentoSi_ComprarNo.toFixed(4)+"</th></tr>"+
    "<tr><th>Descuento no</th><th>"+this.descuentoNo_ComprarSi+"</th><th>"+this.descuentoNo_ComprarNo+"</th></tr>"+
    "<tr><th>Descuento no probabilidad</th><th>"+this.pdescuentoNo_ComprarSi.toFixed(4)+"</th><th>"+this.pdescuentoNo_ComprarNo.toFixed(4)+"</th></tr>"+
    "<tr><th>Entrega gratis si</th><th>"+this.entregaSi_ComprarSi+"</th><th>"+this.entregaSi_ComprarNo+"</th></tr>"+
    "<tr><th>Entrega gratis si probabilidad</th><th>"+this.pentregaSi_ComprarSi.toFixed(4)+"</th><th>"+this.pentregaSi_ComprarNo.toFixed(4)+"</th></tr>"+
    "<tr><th>Entrega gratis no</th><th>"+this.entregaNo_ComprarSi+"</th><th>"+this.entregaNo_ComprarNo+"</th></tr>"+
    "<tr><th>Entrega gratis no probabilidad</th><th>"+this.pentregaNo_ComprarSi.toFixed(4)+"</th><th>"+this.pentregaNo_ComprarNo.toFixed(4)+"</th></tr>";
    
    tabla.innerHTML = llenadoTabla;
  }

  reiniciarValores(){
  this.total=0;
  //Comprar
  this.comprarSi=0;
  this.comprarNo=0;

  this.pcomprarSi=0;
  this.pcomprarNo=0;

  //Dia
    //Si
    this.diaEntreSemana_ComprarSi=0;
    this.diaDiaFestivo_ComprarSi=0;
    this.diaFinDeSemana_ComprarSi=0;

    this.pdiaEntreSemana_ComprarSi=0;
    this.pdiaDiaFestivo_ComprarSi=0;
    this.pdiaFinDeSemana_ComprarSi=0;
    //No
    this.diaEntreSemana_ComprarNo=0;
    this.diaDiaFestivo_ComprarNo=0;
    this.diaFinDeSemana_ComprarNo=0;

    this.pdiaEntreSemana_ComprarNo=0;
    this.pdiaDiaFestivo_ComprarNo=0;
    this.pdiaFinDeSemana_ComprarNo=0;

  //Descuento
    //Si
    this.descuentoSi_ComprarSi=0;
    this.descuentoNo_ComprarSi=0;

    this.pdescuentoSi_ComprarSi=0;
    this.pdescuentoNo_ComprarSi=0;

    //No
    this.descuentoSi_ComprarNo=0;
    this.descuentoNo_ComprarNo=0;

    this.pdescuentoSi_ComprarNo=0;
    this.pdescuentoNo_ComprarNo=0;
  //Entrega gratis
    //Si
    this.entregaSi_ComprarSi=0;
    this.entregaNo_ComprarSi=0;

    this.pentregaSi_ComprarSi=0;
    this.pentregaNo_ComprarSi=0;
    //No
    this.entregaSi_ComprarNo=0;
    this.entregaNo_ComprarNo=0;

    this.pentregaSi_ComprarNo=0;
    this.pentregaNo_ComprarNo=0;
  }
  
}
