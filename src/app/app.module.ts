import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview.component';
import { CouponComponent } from './components/coupon.component';
import { ImpressumComponent } from './components/impressum.component';
import { DatenschutzComponent } from './components/datenschutz.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { LandingPageComponent } from './components/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CouponComponent,
    ImpressumComponent,
    DatenschutzComponent,
    ProductDetailsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
