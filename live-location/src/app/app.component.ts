import { Component, OnInit } from '@angular/core';

declare const L: any;
@Component({
  selector: 'angular-live-location-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'live-location';

  ngOnInit(){
    if(!navigator.geolocation){
      console.log('location not supported!');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let map = L.map('map').setView(latLong, 13);

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);

        let marker = L.marker(latLong).addTo(map);

    });
    this.watchPosition();
  }
  
  
  watchPosition(){
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if(position.coords.latitude == desLat){
        navigator.geolocation.clearWatch(id);
      }
    },(err) => {
      console.log(err);
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }
}
