import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  selector: 'app-auction-card',
  imports: [],
  template: ` 
  <div class="card">
    @let a = auction();
    @if(a) {
      <div class="card-header">{{ a.title }} {{  undefined }}</div>
      <img class="card-img" [src]="a.imgUrl" alt="" />
      <div class="card-body">
        <p class="card-text">{{ a.description }}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{ a.price }} zł</strong>
          <button class="btn btn-primary">[ + ]</button>
        </div>
      </div>
    }
  </div>
  `,
  styles: [``],
})
export class AuctionCard {
  auction = input.required<AuctionItem>()
  // auction = signal<AuctionItem | undefined>({
  //   id: '1',
  //   title: 'Części do aparatu',
  //   imgUrl: 'https://picsum.photos/id/36/600/600',
  //   description: 'Jakiś opis',
  //   price: 2000,
  // });
}
