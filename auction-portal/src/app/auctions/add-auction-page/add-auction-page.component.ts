import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuctionItem, AuctionItemWithoutId } from '../auction-item';
import { AuctionsResourceService } from '../auctions-resource.service';

@Component({
  selector: 'app-add-auction-page',
  imports: [FormsModule],
  template: `
    <div>
      <h2>Dodaj nową aukcję</h2>
      <section class="mt-2 row">
        <div class="col-6">
          <img
            class="img-thumbnail"
            alt="Podgląd fotografii"
            [src]="imgUrl"
          />
        </div>
        <div class="col-6">
          <form #auctionForm="ngForm" (ngSubmit)="handleFormSubmit(auctionForm)">
            <div class="form-group">
              <label for="auctionTitle">Nazwa aukcji *</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i icon="edit"></i>
                  </span>
                </div>
                <input id="auctionTitle" type="text" name="title" ngModel required class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <label for="auctionPrice">Cena aukcji *</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i icon="tag"></i>
                  </span>
                </div>
                <input id="auctionPrice" type="number" name="price" ngModel required class="form-control" />
              </div>
            </div>

            <div class="form-group">
              <label for="img">Zdjecie *</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i icon="image"></i>
                  </span>
                </div>
                <!-- <input id="img" type="number" name="imgId" [ngModel]="imgId" (input)="imgId = +$event.target.value" required class="form-control" /> -->
                <input id="img" type="number" name="imgId" ngModel [(ngModel)]="imgId" required class="form-control" />
                <!-- [()] - bananas in the box -->
              </div>
            </div>

            <div class="form-group">
              <label for="auctionDescription">Szczegółowy opis</label>
              <div class="input-group mb-3">
                <textarea
                  id="auctionDescription"
                  rows="5"
                  class="form-control"
                  name="description"
                  ngModel
                ></textarea>
              </div>
            </div>
            <div class="text-right">
              <button class="btn btn-primary" type="submit" [style.opacity]="auctionForm.invalid ? 0.5: 1">
                <i icon="gavel"></i> Dodaj aukcję
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  `,
  styles: `
  
    input.ng-invalid.ng-touched {
      border: 2px solid red;
    }
  
  `,
})
export class AddAuctionPageComponent {

  imgId = 180;

  get imgUrl() {
    return 'https://picsum.photos/id/' + this.imgId + '/600/600'
  }

  private readonly auctionsResourceService = inject(AuctionsResourceService)


  handleFormSubmit(form: NgForm) {
    if(form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    // console.log(form.value);

    const auctionWithoutId: AuctionItemWithoutId = {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
      title: form.value.title ?? '',
      imgUrl: this.imgUrl,
      price: form.value.price ?? 0,
      description: form.value.description || undefined
    }
    
    this.auctionsResourceService.addOne(auctionWithoutId).subscribe({
      next: (auction) => {
          console.log(auction)
          form.reset({imgId: 180});
      },
      error: (err) =>{
        console.error(err)
      }
    })
  }
}
