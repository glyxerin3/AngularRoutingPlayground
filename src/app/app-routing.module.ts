import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./components/overview.component";
import {CouponComponent} from "./components/coupon.component";
import {ImpressumComponent} from "./components/impressum.component";
import {DatenschutzComponent} from "./components/datenschutz.component";
import {ProductDetailsComponent} from "./components/product-details.component";
import {LandingPageComponent} from "./components/landing-page.component";

const routes: Routes = [
  { path: 'overview/:categorie/:subcategorie', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'overview/:brand', component: OverviewComponent },
  { path: 'overview/:product', component: OverviewComponent },
  { path: 'coupons', component: CouponComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
