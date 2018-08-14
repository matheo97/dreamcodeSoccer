import { Component, ViewChild } from '@angular/core';
import { NavController , Slides , ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

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



  constructor(private afAuth : AngularFireAuth, private toast : ToastController, public navCtrl: NavController) {

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

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {

        if(data && data.email && data.uid){
          this.toast.create({
            message: "Welcome to the dreamcodesoccer app ${data.email}",
            duration: 3000
          }).present()
        }
        else{
          this.toast.create({
            message: "Could not find authentication details",
            duration: 3000
          }).present()
        }

    });
  }

}
