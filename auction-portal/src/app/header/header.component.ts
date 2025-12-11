import { Component, OnInit, signal, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1>{{ title() }} </h1>
      <em (mouseover)="subtitleHovered.emit(subtitle())">{{ subtitle() }}</em> {{ a() }}
    </header>
  `,
  styles: ``,
})
export class HeaderComponent implements OnInit {
  protected readonly title = signal('Auction portal');

  // PROPS (z innychameworków np. React)
  // FROM parent to child:
  subtitle = input('kupuj i sprzedawaj on-line');

  a = input.required<number>(); // required nie ma wartości domyślnej więc trzeba dodefiniować typ w <tut>
  b = input(0);
  // niepolecane (stare API)
  // @Input() subtitle = "kupuj i sprzedawaj on-line"

  // FROM child to patent
  subtitleHovered = output<string>()

  constructor() {}

  ngOnInit(): void {
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
