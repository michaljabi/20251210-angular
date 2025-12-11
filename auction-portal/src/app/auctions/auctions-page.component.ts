import { Component } from '@angular/core';

@Component({
  selector: 'app-auctions-page',
  imports: [],
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>
      <div class="row">
        @for(i of [1,2,3,4,5,6,7,8,9]; track i) {
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">[aukcja {{ i }}]</div>
        } ...
      </div>
    </section>
  `,
  styles: ``,
})
export class AuctionsPageComponent {}
