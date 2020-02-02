import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//material components
import { MatSliderModule } from '@angular/material/slider';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSliderModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//MatSliderModule
@Component({
  selector: 'slider-formatting-example',
  templateUrl: 'slider-formatting-example.html',
  styleUrls: ['slider-formatting-example.css']
})
export class SliderFormattingExample{

}
//===========
