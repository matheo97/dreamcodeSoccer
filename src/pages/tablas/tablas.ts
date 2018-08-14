import { Component, ViewChild } from '@angular/core';
import { NavController, Slides} from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-tablas',
  templateUrl: 'tablas.html'
})
export class TablasPage {

  @ViewChild('tablaSlider') slider: Slides;
  slides: any;
  currentSlide:any;

  tablas: Observable<any[]>;

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {

    this.currentSlide = 1;
    this.tablas = afDB.list('tablas').valueChanges();
    
  }

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
