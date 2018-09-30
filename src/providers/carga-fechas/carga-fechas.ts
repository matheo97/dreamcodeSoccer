import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class CargaFechasProvider {

  todosPartidos:  Array<any> = [];
  numeroDeFechas: any;
  numeroDeEquipos: any;
  fechaActual: any;

  constructor(private afDB: AngularFireDatabase) {

    console.log('Hello CargaFechasProvider Provider');

    afDB.object('constantes/numeroFechas').valueChanges().subscribe(val => this.numeroDeFechas = val);
    afDB.object('constantes/numeroEquipos').valueChanges().subscribe(val => this.numeroDeEquipos = val);
    afDB.object('constantes/fechaActual').valueChanges().subscribe(val => this.fechaActual = val);

    afDB.list('/partidos').valueChanges()
                          .subscribe( (partidos:any) => {
                                this.splitBy_Fechas(partidos, this.numeroDeFechas, this.numeroDeEquipos);
                          });

  }

  splitBy_Fechas(partidos: any, numeroFechas : any, numeroDeEquipos : any){

    var partidosPorFecha = numeroDeEquipos/2;
    var indexP = 0;

    for (let fecha = 0; fecha < numeroFechas; fecha++)
    {

      var lista = [];

      for (let i = indexP; i < (indexP + partidosPorFecha); i++) {
          lista.push(partidos[i]);
      }

      this.todosPartidos.push(lista);
      indexP = indexP + partidosPorFecha;

    }
    
  }

}
