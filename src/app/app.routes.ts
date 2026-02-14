import { Routes } from '@angular/router';
import { MyCustomForm } from './my-custom-form/my-custom-form';
import { AngularResources } from './angular-resources/angular-resources';

export const routes: Routes = [
  {
    path: 'AngularResources',
    component: AngularResources,
  },
  {
    path: 'FormGroupSandbox',
    component: MyCustomForm
  }
];
