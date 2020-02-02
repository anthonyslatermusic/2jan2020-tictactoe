import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-example',
  templateUrl: './slider-example.component.html',
  styleUrls: ['./slider-example.component.css']
})

export class SliderExampleComponent {
  displayValue(value: number){
    if (value >= 1000){
      return Math.round(value / 1000) + 'k'
    }
    return value;
  }
}