import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { RegisterpageMaincardComponent } from './registerpage-maincard/registerpage-maincard.component';
import { RegisterpageMaincardHeadingComponent } from './registerpage-maincard-heading/registerpage-maincard-heading.component';
import { RegisterpageMaincardImputsComponent } from './registerpage-maincard-imputs/registerpage-maincard-imputs.component';
import { RegisterpageMaincardRegesterbtnComponent } from './registerpage-maincard-regesterbtn/registerpage-maincard-regesterbtn.component';
import { RegisterpageMaincardLeftComponent } from './registerpage-maincard-left/registerpage-maincard-left.component';
import { RegisterpageMaincardRightComponent } from './registerpage-maincard-right/registerpage-maincard-right.component';
import { RegisterpageMaincardLeftcoreComponent } from './registerpage-maincard-leftcore/registerpage-maincard-leftcore.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    RegisterpageMaincardComponent,
    RegisterpageMaincardHeadingComponent,
    RegisterpageMaincardImputsComponent,
    RegisterpageMaincardRegesterbtnComponent,
    RegisterpageMaincardLeftComponent,
    RegisterpageMaincardRightComponent,
    RegisterpageMaincardLeftcoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
