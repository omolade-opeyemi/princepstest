import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { HeaderComponent } from '../components/header/header.component';
import { InnerpageRoutingModule } from './innerpage-routing.module';
import { InnerpageComponent } from './innerpage.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    InnerpageComponent,
    SidenavComponent,
    HeaderComponent,
    CustomerComponent

  ],
  imports: [
    CommonModule,
    InnerpageRoutingModule,
    MatTooltipModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    // BrowserAnimationsModule

  ],
  providers: [
    ToastrService,
  ]
})
export class InnerpageModule { }
