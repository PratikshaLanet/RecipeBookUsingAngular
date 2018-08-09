import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBgSuzMZjlKbPtb1JihNbEv1gCET-5WaFM',
      authDomain: 'recipebook-89102.firebaseapp.com'
    });

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
