import { Component } from '@angular/core';

import { FechaPage } from '../fecha/fecha';
import { TablasPage } from '../tablas/tablas';
import { MisPartidosPage } from '../mis_partidos/mis_partidos';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MisPartidosPage;
  tab2Root = FechaPage;
  tab3Root = TablasPage;
  tab4Root = PerfilPage;

  constructor() {

  }

}
