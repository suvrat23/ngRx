import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyPageRoutingModule } from './lazy-page-routing.module';
import {LazyPageComponent} from './lazy-page.component';
import {GmPageTitleModule} from '@gds/prime-ng/page-title';
import {GmToolbarModule} from '@gds/prime-ng/toolbar';
import {
  ButtonModule,
  ConfirmDialogModule,
  DialogModule,
  InputNumberModule,
  InputTextareaModule, InputTextModule,
  RadioButtonModule,
  TableModule, ToastModule,
} from 'primeng';
import {FormsModule} from '@angular/forms';
import {GmApplicationSearchModule} from '@gds/prime-ng';



@NgModule({
  imports: [
    CommonModule,
    LazyPageRoutingModule,
    // PrimeNG

    // GM Accelerate
    GmPageTitleModule,
    GmToolbarModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ToastModule,
    InputTextModule,
    GmApplicationSearchModule,
  ],
  exports: [
    LazyPageComponent
  ],
  declarations: [
    LazyPageComponent
  ]
})
export class LazyPageModule { }
