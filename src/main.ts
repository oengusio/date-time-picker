import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { OWL_DATE_TIME_LOCALE, OptionsTokens } from '../projects/picker/src/public_api';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),{
      provide: OWL_DATE_TIME_LOCALE,
      useValue: 'en-US'
    },
    {
      provide: OptionsTokens.multiYear,
      useFactory: () => ({ yearRows: 5, yearsPerRow: 3, }),
    },
  ]
})
