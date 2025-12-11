import { inject, Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';

// to jest TZW. stateless service
// to znaczy że nie przechowuje (cacheuje) żadnych danych  w odróżnieniu do statefull.
@Injectable({
  providedIn: 'root',
})
export class AuctionsResourceService {
  private readonly auctionsEndpoint = 'http://localhost:3000/auctions';
  private readonly httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<AuctionItem[]>(this.auctionsEndpoint);
  }

  // Zaszyta logika do odpytania tylko auckji z promocjami:
  // http://localhost:3000/auctions?isPromoted=true
  getAllPromotions() {
    return this.httpClient.get<AuctionItem[]>(this.auctionsEndpoint, {
      params: { isPromoted: true },
    });
  }

  addOne(auction: AuctionItem) {
    return this.httpClient.post<AuctionItem>(this.auctionsEndpoint, auction);
  }
}
