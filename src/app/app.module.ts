import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    MatIconModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
