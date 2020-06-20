import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[
    QRScanner,
  ],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
