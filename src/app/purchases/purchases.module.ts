import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyfilterPipe } from '../shared/pipes/myfilter.pipe';


@NgModule({
  declarations: [PurchaseListComponent, PurchaseEditComponent, MyfilterPipe],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PurchasesModule { }
