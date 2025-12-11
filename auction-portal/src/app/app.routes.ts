import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';

export const routes: Routes = [
    //{ path: '', component: AuctionsPageComponent },
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  { path: 'auctions', component: AuctionsPageComponent },
];
