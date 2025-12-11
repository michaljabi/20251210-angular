import { Component, inject, OnInit } from '@angular/core';
import { AuctionItem } from './auction-item';
import { AuctionsResourceService } from './auctions-resource.service';

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
  // providers: [AuctionsResourceService]
})
export class AuctionsPageComponent implements OnInit {
  //https://angular.dev/api/core/inject#usage-notes
  //engine = inject(Engine);
  private readonly auctionsResourceService = inject(AuctionsResourceService);

  // todo: change to signal<AuctionItem[]>([])
  acutions: AuctionItem[] = [];

  ngOnInit(): void {
    // Todo: backend call..

    // odniesienie do instancji z DependencyInjection
    //this.engine
    this.auctionsResourceService.getAll().subscribe({
      next: (auctionsFromServer) => {
        console.log(auctionsFromServer);
      },
    });
  }
}
