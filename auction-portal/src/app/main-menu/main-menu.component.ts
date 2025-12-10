import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  imports: [],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3" [title]="myTooltip" >
      <button class="navbar-toggler" type="button" (click)="handleMenuToggle()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="collapse navbar-collapse" [class.show]="true"> -->
      <!-- <div class="collapse navbar-collapse" [ngClass]="{ 'show': true }"> -->
      <div class="collapse navbar-collapse" [class]="{ 'show': isMenuOpen }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/auctions">Aukcje</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/promotions">Promocje</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/advices">Podpowiadamy</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: ``,
})
export class MainMenuComponent {

  myTooltip = 'Hello!'
  auctions = 'Aukcje'

  isMenuOpen = false;
  // isMenuOpenSn = signal(false);

  handleMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    // this.isMenuOpenSn.set(!this.isMenuOpenSn())
  }
}
