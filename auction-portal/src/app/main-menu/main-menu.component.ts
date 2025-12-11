import { Component, signal } from '@angular/core';

interface MenuItem {
  link: string;
  name: string;
}

@Component({
  selector: 'app-main-menu',
  imports: [],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3" [title]="myTooltip">
      <button class="navbar-toggler" type="button" (click)="handleMenuToggle()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="collapse navbar-collapse" [class.show]="true"> -->
      <!-- <div class="collapse navbar-collapse" [ngClass]="{ 'show': true }"> -->
      <div class="collapse navbar-collapse" [class]="{ show: isMenuOpen }">
        <ul class="navbar-nav">
          <!-- @if(menuItems.length) {  // Follow up do *ngIf="" *ngFor="" na jednym elemencie że nie można, to tutaj w control flow nie mamy takich problemów. -->
          @for(item of menuItems; track item.name) {
          <li class="nav-item">
            <a class="nav-link" [href]="item.link">{{ item.name }}</a>
          </li>
          }
          <!-- } -->
          <!-- OLD Angular -->
          <!-- 
          <li *ngIf="" *ngFor="item of menuItems;" class="nav-item">
            <a class="nav-link" [href]="item.link">{{item.name}}</a>
          </li>
          -->
        </ul>
      </div>
    </nav>
  `,
  styles: ``,
})
export class MainMenuComponent {
  protected menuItems: MenuItem[] = [
    {
      link: '/auctions',
      name: 'Aukcje',
    },
    {
      link: '/promotions',
      name: 'Promocje',
    },
    {
      link: '/advices',
      name: 'Podpowiadamy',
    },
  ];

  myTooltip = 'Hello!';
  auctions = 'Aukcje';

  isMenuOpen = false;
  // isMenuOpenSn = signal(false);

  handleMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    // this.isMenuOpenSn.set(!this.isMenuOpenSn())
  }
}
