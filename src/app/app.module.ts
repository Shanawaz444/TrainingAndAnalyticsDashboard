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
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginpageMaincardComponent } from './loginpage-maincard/loginpage-maincard.component';
import { LoginpageMaincardLeftComponent } from './loginpage-maincard-left/loginpage-maincard-left.component';
import { LoginpageMaincardRightComponent } from './loginpage-maincard-right/loginpage-maincard-right.component';
import { LoginpageMaincardRightHeadComponent } from './loginpage-maincard-right-head/loginpage-maincard-right-head.component';
import { LoginpageMaincardRightInputsComponent } from './loginpage-maincard-right-inputs/loginpage-maincard-right-inputs.component';
import { LoginpageMaincardRightBtnComponent } from './loginpage-maincard-right-btn/loginpage-maincard-right-btn.component';

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
    RegisterpageMaincardLeftcoreComponent,
    LoginpageComponent,
    LoginpageMaincardComponent,
    LoginpageMaincardLeftComponent,
    LoginpageMaincardRightComponent,
    LoginpageMaincardRightHeadComponent,
    LoginpageMaincardRightInputsComponent,
    LoginpageMaincardRightBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
