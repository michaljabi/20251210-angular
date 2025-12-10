import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  // template: `Hello World`,
  styleUrl: './app.css',
})
export class App {
  // Dane które nie zmieniają się w czasie
  protected readonly title = 'auction-portal';
  // Stan danych
  protected readonly hello = signal('Hello World');
  protected readonly auctions = signal([{ name: 'Aukcja' }]);

  constructor() {
    // @ts-ignore
    // console.log(x);
    setTimeout(() => {
      this.hello.set('Goodbye world');
      this.auctions.update((current) => [...current, { name: 'Kolejna...' }]);
    }, 2000);

    setTimeout(() => {
      this.auctions.update((current) =>
        current.map((a) => {
          a.name = 'HELLO';
          return a;
        })
      );
    }, 5000);
  }
}
