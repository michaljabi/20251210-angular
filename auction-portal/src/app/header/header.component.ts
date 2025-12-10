import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1>{{ title() }}</h1>
      {{ title() }}
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  protected readonly title = signal('Auction portal');

  constructor() {
    //this.title = 'hello'
    console.log('hello ?');
    setTimeout(() => {
      // this.title = 'Auction portal!'

      // Rozwiązania:
      // this.title.set('Auction portal!');
      // this.title.set(this.title() + '!');
      this.title.update((t) => t + '!');
    }, 4000);
  }
}
