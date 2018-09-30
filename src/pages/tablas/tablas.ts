import { Component, ViewChild } from '@angular/core';
import { NavController, Slides} from 'ionic-angular';
import { Observable } from 'rxjs';
import { CargaTablasProvider } from "../../providers/carga-tablas/carga-tablas";
import { PipesModule } from '../../pipes/pipes.module';

@Component({
  selector: 'page-tablas',
  templateUrl: 'tablas.html'
})
export class TablasPage {

  @ViewChild('tablaSlider') slider: Slides;
  slides: any;
  currentSlide:any;

  constructor(public navCtrl: NavController, private cargaTablas: CargaTablasProvider, private pipeModule: PipesModule) {

    this.currentSlide = 1;
    console.log('Hello Tablas Page');

  }
  

  //Eventos slide con las flechitas.

  onSlideChangedLeft(event) {
    console.log('Slide try to change prev');
    this.slider.lockSwipeToNext(false);
    this.slider.lockSwipeToPrev(false);

    if(!this.slider.isBeginning())
    {
        console.log('Slide changed prev');
        this.slider.slidePrev(500, true);
        this.currentSlide = this.slider.getActiveIndex() + 1;
    }
    else{

        console.log('Slide can´t change prev');
        this.slider.lockSwipeToPrev(true);

    }
  }

  onSlideChangedRight(event) {
    console.log('Slide try to change next');
    this.slider.lockSwipeToNext(false);
    this.slider.lockSwipeToPrev(false);

    if(!this.slider.isEnd())
    {
        console.log('Slide changed next');
        this.slider.slideNext(500, true);
        this.currentSlide = this.slider.getActiveIndex() + 1;
    }
    else{
        console.log('Slide can´t change next');
        this.slider.lockSwipeToNext(true);
    }
  }

  onSlideChangedByFinger(event) {
    console.log('Slide changed by finger');
    this.currentSlide = this.slider.getActiveIndex() + 1;
  }

}
