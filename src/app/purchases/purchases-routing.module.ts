import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchasesComponent } from './purchases.component';

const routes: Routes = [
  {
    path: '',
    component: PurchasesComponent,
    children: [
      {
        path: '',
        component: PurchaseListComponent,
      },
      {
        path: 'edit',
        component: PurchaseEditComponent,
      },
      {
        path: 'edit/:id',
        component: PurchaseEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
