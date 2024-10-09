import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));

  export const appConfig: ApplicationConfig = {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideClientHydration(),
      provideHttpClient(),
      provideToastr()
    ]
  };