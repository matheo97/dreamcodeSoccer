import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CargaFechasProvider {

  partidosPorFecha: any;
  todosPartidos:  Array<any> = [];
  numeroDeFechas: any;
  numeroDeEquipos: any;
  fechaActual: any;

  constructor(private http: HttpClient, private afDB: AngularFireDatabase) {

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

    for (let fecha = 0; fecha < numeroFechas; fecha++) {

      var lista = [];

      for (let nPartido = 0; nPartido < numeroDeEquipos; nPartido++)
      {
        lista.push(partidos[nPartido]);
      }

      this.todosPartidos.push(lista);

    }

  }

}
