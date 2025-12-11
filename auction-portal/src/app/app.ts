import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { AuctionsPageComponent } from "./auctions/auctions-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainMenuComponent, AuctionsPageComponent],
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

  handleHover(text:string) {
    console.log('Odbieram', text)
  }
}
