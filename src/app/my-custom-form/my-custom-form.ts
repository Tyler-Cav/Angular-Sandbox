import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-my-custom-form',
  imports: [
    RouterOutlet
  ],
  templateUrl: './my-custom-form.html',
  styleUrl: './my-custom-form.scss',
})
export class MyCustomForm {

}
