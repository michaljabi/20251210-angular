import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page.component';
import { AddAuctionPageComponent } from './auctions/add-auction-page/add-auction-page.component';
import { CartPageComponent } from './auctions/cart-page/cart-page.component';
// Tego importu trzeba się pozbyć, bo tutaj chemy zrobić tzw. Lazy Loading w routingu
// import { AdvicePageComponent } from './advices/advice-page/advice-page.component';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';

export const routes: Routes = [
  //{ path: '', component: AuctionsPageComponent },
  
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  { path: 'add-auction', component: AddAuctionPageComponent },
  { path: 'cart', component: CartPageComponent },

  // to stosuje się po to żeby "podzielić" dużą aplikację SPA
  // lub
  // w momencie w którym np. mamy /dashboard z którego korzystają tylko Admini a 99% innych to EndUsers zwykli
  { path: 'advices', loadChildren: () => import('./advices/advices.routes').then((m) => m.routes) },
  
  { path: '**', component: NotFoundPageComponent },
];
