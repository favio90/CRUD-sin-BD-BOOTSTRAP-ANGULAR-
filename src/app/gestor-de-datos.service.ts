import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestorDeDatosService {
  static articulos: any[];

  constructor() { }

  articulos = [{ codigo: 1, descripcion: 'Milanesa', precio: 50, colorearFila: false },
  { codigo: 2, descripcion: 'Bife', precio: 35, colorearFila: false },
  { codigo: 3, descripcion: 'Cerveza', precio: 80, colorearFila: false },
  { codigo: 4, descripcion: 'Papas', precio: 26, colorearFila: false },
  { codigo: 5, descripcion: 'Palmitos', precio: 17, colorearFila: false },
  ];

  seleccionado: boolean = false;
  indice: number = -1;
  codigoseleccionado: number = -1;


  // art = {
  //   codigo: 0,
  //   descripcion: "",
  //   precio: 0,
  //   colorearFila: false
  // }



  hayRegistros(): boolean {
    return this.articulos.length > 0;
  }

  devuelveIndiceArray(codigo: number): number {

    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        return x;
      }
    return 1;
  }

  agregar(codigo: number, descripcion: string, precio: number) {
    if (codigo == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    this.articulos.push({
      codigo,
      descripcion,
      precio,
      colorearFila: false

    });

  }

  corroborarSeleccion(i: number) {


    if (this.seleccionado) {

      this.articulos[this.devuelveIndiceArray(this.codigoseleccionado)].colorearFila = false;

      let temp = this.articulos[this.indice];
      this.articulos[this.indice] = this.articulos[i];
      this.articulos[i] = temp;

      this.seleccionado = false;
      this.indice = -1;

    } else {

      this.seleccionado = true;
      this.indice = i;
      this.articulos[i].colorearFila = true;
      this.codigoseleccionado = this.articulos[i].codigo;
    }

  }


  borrar(codigo: number) {
    this.seleccionado = false;
    this.articulos[this.devuelveIndiceArray(this.codigoseleccionado)].colorearFila = false;

    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {

        if (this.articulos[x].colorearFila == true) {

          this.seleccionado = false

        }

        this.articulos.splice(x, 1);
        return;
      }
  }




}



