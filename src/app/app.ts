import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { routeInfo } from './models/main.model'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  appRoutes: routeInfo[] = [
      { linkName: "Angular Resources", path: 'AngularResources'},
      { linkName: "FormGroup", path: 'FormGroupSandbox'}
    ]
}
