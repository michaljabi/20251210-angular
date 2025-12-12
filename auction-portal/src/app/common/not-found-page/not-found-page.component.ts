import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <section>
      <h2>404 nie znaleziono strony :(</h2>
      <div>
        <div class="alert alert-warning d-flex justify-content-between">
          <span>Strona <code>{{ '/' + activatedRoute.snapshot.url.join('/') }}</code> nie została odnaleziona</span>
          <a class="btn btn-outline-primary" routerLink="/">
            powrót do 🏠
          </a>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class NotFoundPageComponent {
    protected readonly activatedRoute = inject(ActivatedRoute)
}
