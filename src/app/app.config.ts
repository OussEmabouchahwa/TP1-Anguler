import { ApplicationConfig, provideZoneChangeDetection,LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'fr-FR' }, provideClientHydration()]
};
