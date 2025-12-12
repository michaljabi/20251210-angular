import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page.component';
import { AddAuctionPageComponent } from './auctions/add-auction-page/add-auction-page.component';
import { CartPageComponent } from './auctions/cart-page/cart-page.component';
import { AdvicePageComponent } from './advices/advice-page/advice-page.component';

export const routes: Routes = [
  //{ path: '', component: AuctionsPageComponent },
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  { path: 'add-auction', component: AddAuctionPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'advices', component: AdvicePageComponent },
];
