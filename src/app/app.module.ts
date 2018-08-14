import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FechaPage } from '../pages/fecha/fecha';
import { TablasPage } from '../pages/tablas/tablas';
import { MisPartidosPage } from '../pages/mis_partidos/mis_partidos';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {

  apiKey: "AIzaSyCsS-fB3VsxV_VeNYypCKFjfG9mJC7pXYc",
  authDomain: "dreamcodesoccer.firebaseapp.com",
  databaseURL: "https://dreamcodesoccer.firebaseio.com",
  projectId: "dreamcodesoccer",
  storageBucket: "dreamcodesoccer.appspot.com",
  messagingSenderId: "1082670795515"

};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    FechaPage,
    TablasPage,
    MisPartidosPage,
    PerfilPage,
    TabsPage,
    RegistrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FechaPage,
    TablasPage,
    MisPartidosPage,
    PerfilPage,
    TabsPage,
    LoginPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
