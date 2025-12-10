import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1>Auction portal</h1>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {

  constructor() {
    setTimeout(() => {
      
    }, 4000)
  }
}
