import { Routes } from '@angular/router';
import { AdvicePageComponent } from './advice-page/advice-page.component';
import { AdviceDetailsComponent } from './advice-page/advice-details.component';

export const routes: Routes = [
  {
    path: '',
    component: AdvicePageComponent,
    children: [
        { path: '', component: AdviceDetailsComponent },
        { path: ':adviceId', component: AdviceDetailsComponent },
    ],
  },
];
