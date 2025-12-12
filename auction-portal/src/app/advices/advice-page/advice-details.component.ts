import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advice-details',
  imports: [JsonPipe, AsyncPipe],
  template: `
    <div>
      {{ activatedRoute.snapshot.params | json }}
      <div>
        <!-- nie musisz pilnować subskrypcji jeśli używasz asnyc pipe (wtedy nie musisz .unsubsribe() -->
        {{ this.activatedRoute.params | async | json }} 
        <!-- uwaga, w przypadku activatedRoute i tak NIE MUSIMY :) -->
        <!-- AsyncPipe stosujemy tylko do HappyPath! -->
      </div>
    </div>
  `,
  styles: ``,
})
export class AdviceDetailsComponent implements OnInit {
    protected readonly activatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
      // to będzie jednorazowe, jeśli spełnimy warunek :adviceId w routing table!
      // console.log(this.activatedRoute.snapshot.params)

       this.activatedRoute.queryParams.subscribe((queryParams) => {
        //?hello=world&size=9
        console.log('queryParams', queryParams)
       })
      // Dlatego to jest bezpieczniejsze !
      this.activatedRoute.params.subscribe((params) => {
        // console.log(params);
        this.loadAdviceByIdFormBackend(Number(params['adviceId'] || 0))
      })
    }

    loadAdviceByIdFormBackend(id: number) {
      console.log(id);
    }
}
