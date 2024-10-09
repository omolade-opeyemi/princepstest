import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerpageComponent } from './innerpage.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '', component: InnerpageComponent, children:[
      {path: '', redirectTo: 'customer', pathMatch: 'full'},
      {path: 'customer', component:CustomerComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerpageRoutingModule { }
