import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { CargaFechasProvider } from "../../providers/carga-fechas/carga-fechas";

@Component({
  selector: 'page-fecha',
  templateUrl: 'fecha.html'
})
export class FechaPage{

  @ViewChild('fechaSlider') slider: Slides;
  currentSlide:any;

  constructor(public cargaFechas: CargaFechasProvider) {}

  ngAfterViewChecked(){
     setTimeout(()=>
     {
       if(this.slider)
       {
         this.slider.slideTo(this.cargaFechas.fechaActual);
         this.currentSlide = this.slider.getActiveIndex() + 1;
       }
     },300);
  }

  //toolbar button handling

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
