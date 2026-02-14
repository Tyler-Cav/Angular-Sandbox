import {Component, signal} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-angular-resources',
    imports: [
        RouterOutlet
    ],
  templateUrl: './angular-resources.html',
  styleUrl: './angular-resources.scss',
})
export class AngularResources {
  protected readonly title = signal('angular-sandbox');
}
