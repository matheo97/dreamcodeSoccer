import { Component, ViewChild } from '@angular/core';
import { NavController , Slides } from 'ionic-angular';

@Component({
  selector: 'page-mis_partidos',
  templateUrl: 'mis_partidos.html'
})
export class MisPartidosPage {

  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  matches_played: any;
  slides: any;
  cards: any;



  constructor(public navCtrl: NavController) {

    this.matches_played = new Array(5);
    this.selectedSegment = "played";

    this.slides = [
      {
        id: "played"
      },
      {
        id: "willBePlay"
      }
    ];

  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  }

}
