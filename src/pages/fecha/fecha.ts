import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Events} from 'ionic-angular';
import { CargaFechasProvider } from "../../providers/carga-fechas/carga-fechas";

@Component({
  selector: 'page-fecha',
  templateUrl: 'fecha.html'
})
export class FechaPage {

  @ViewChild('fechaSlider') slider: Slides;
  slides: any;
  matches_example: any;
  currentSlide:any;

  constructor(public navCtrl: NavController, public cargaFechas: CargaFechasProvider, public events: Events) {

    this.currentSlide = 3;
    console.log(cargaFechas.fechaActual);

  }

  //Controles desde el toolBar

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

  //eventos slide generados por los controles del toolbar

  onSlideChangedByFinger(event) {
    console.log('Slide changed by finger');
    this.currentSlide = this.slider.getActiveIndex() + 1;
  }

}
