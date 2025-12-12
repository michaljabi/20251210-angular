import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advice-details',
  imports: [JsonPipe],
  template: `
    <div>
      {{ activatedRoute.snapshot.params | json }}
    </div>
  `,
  styles: ``,
})
export class AdviceDetailsComponent implements OnInit {
    protected readonly activatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
      // to będzie jednorazowe, jeśli spełnimy warunek :adviceId w routing table!
      // console.log(this.activatedRoute.snapshot.params)

      // Dlatego to jest bezpieczniejsze !
      this.activatedRoute.params.subscribe((params) => {
        // console.log(params);
        this.loadAdviceByIdFormBackend(Number(params['adviceId']))
      })
    }

    loadAdviceByIdFormBackend(id: number) {
      console.log(id);
    }
}
