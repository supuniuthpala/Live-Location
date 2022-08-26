import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCcHtdU6iyGXHD_tRC0qMI1yCAZ1Nj4bks',
    //   libraries: ['places']

    // })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
