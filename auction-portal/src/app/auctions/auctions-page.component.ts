import { Component, inject, OnInit, signal } from '@angular/core';
import { AuctionItem } from './auction-item';
import { AuctionsResourceService } from './auctions-resource.service';
//import { JsonPipe } from '@angular/common';
import { AuctionCard } from './auction-card/auction-card';

@Component({
  selector: 'app-auctions-page',
  imports: [AuctionCard],
  template: `
    <section>
      <h2>Lista naszych aukcji</h2>
      <!-- {{ acutions() | json }} -->
      <div class="row">
        <!-- tutaj umieść alerty task(19) -->
        @if(errorMessage()) {
          <div class="col-12 alert alert-danger">Niestety wystąpił błąd... {{ errorMessage() }}</div>
        }
        @if(isLoading()) {
          <div class="col-12 alert alert-info">Ładuje aukcje...</div>
        } 
        @for(a of acutions(); track a.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <!-- {{ a | json }} -->
          <app-auction-card [auction]="a" />
        </div>
        }
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
  protected readonly acutions = signal<AuctionItem[]>([]);
  protected readonly isLoading = signal<boolean>(true);
  // dla typów prostych nie warto (nie ma potrzeby) dodawania argumentu typu np tutaj: <string>
  protected readonly errorMessage = signal('');

  ngOnInit(): void {
    this.reloadAuctions();
  }

  reloadAuctions() {
     // odniesienie do instancji z DependencyInjection
    this.isLoading.set(true)
    this.errorMessage.set('')
    this.auctionsResourceService.getAll().subscribe({
      next: (auctionsFromServer: AuctionItem[]) => {
        console.log(auctionsFromServer);
        this.acutions.set(auctionsFromServer);
      },
      error: (err) => {
        console.log(err.message);
        this.errorMessage.set(err.message)
        this.isLoading.set(false)
      },
      complete: () => {
        console.log('Completed!');
        this.isLoading.set(false);
      },
    });
  }
}
