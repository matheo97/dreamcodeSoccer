import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class CargaTablasProvider {

  equiposTabla1: Array<any> = [];
  equiposTabla2: Array<any> = [];
  equiposTabla3: Array<any> = [];

  constructor(afDB: AngularFireDatabase) {

    console.log('Hello CargaTablasProvider Provider');

    afDB.list('/equipos',
        ref => ref.orderByChild('puntos'))
                  .valueChanges()
                  .subscribe( (equipos:any) => {
                    this.orderBy_diferenciaGol(equipos);
                  })

    afDB.list('/equipos',
        ref => ref.orderByChild('goles'))
                  .valueChanges()
                  .subscribe( (equipos:any) => {
                    this.equiposTabla2 = equipos;
                  })

    afDB.list('/equipos',
        ref => ref.orderByChild('totalTarjetas'))
                  .valueChanges()
                  .subscribe( (equipos:any) => {
                    this.equiposTabla3 = equipos;
                  })

  }


  orderBy_diferenciaGol(equipos: Array<any>)
  {
    let equiposOrdenados = [];

    for (let x = 0; x < equipos.length; x++) {

      if( (x+2) > equipos.length)
      {
        console.log("Dentro del if que evita desbordamiento");
        console.log(x);
         equiposOrdenados.push(equipos[x]);
      }
      else
      {
        console.log("Dentro del if que evita desbordamiento 2");
        console.log(x);

          if(equipos[x].puntos == equipos[x+1].puntos)
          {
            let equiposConMismosPuntos = [equipos[x], equipos[x+1]];
            console.log(equiposConMismosPuntos);
            let refenciaPuntos = equipos[x].puntos;
            x = x + 2;

            for (let i = x; i < equipos.length; i++) {

                if (refenciaPuntos == equipos[i].puntos)
                {
                    equiposConMismosPuntos.push(equipos[i]);
                    console.log("Dentro del if");
                    console.log(equiposConMismosPuntos);
                    x = i;
                }
                else
                {
                    x = i - 1;
                    break;
                }

            }

            equiposConMismosPuntos.sort(function (a, b) {
               return a.diferenciaGol - b.diferenciaGol;
            });

            equiposOrdenados = equiposOrdenados.concat(equiposConMismosPuntos);

          }
          else
          {
              equiposOrdenados.push(equipos[x]);
          }
      }

    }

    this.equiposTabla1 =  equiposOrdenados;

  }





}
