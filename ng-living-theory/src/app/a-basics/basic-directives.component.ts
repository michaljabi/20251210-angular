import { Component, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

type MyFlag = 'one' | 'two' | 'tree';

@Component({
  selector: 'app-basic-directives',
  imports: [NgClass, NgStyle],
  template: `
    <h2>Pseudo-dyrektywy [style] oraz [class]</h2>
    <h3 class="subtitle is-family-monospace">basic-directives</h3>
    <div class="box">
      @let visible = isVisible();
      <h4
        tabindex="0"
        (click)="isVisible.set(!visible)"
        (keyup.enter)="isVisible.set(!visible)"
      >
        Kliknij aby zmienić wartość <code>isVisible</code>
      </h4>
      @if (visible) {
        <p>
          Ta treść będzie renderowana tylko jeśli <code>isVisible = true</code>
        </p>
      }
      <h5 [class.bg-red]="hasClass">
        Klasa css <code>.bg-red</code> będzie "dopięta" tylko jeśli
        <code>hasClass = true</code>
      </h5>
    </div>
    <div class="box">
      Różna treść w zależności od wartości:
      @switch (optionNumber) {
        @case ('one') {
          <span> 🍌 </span>
        }
        @case ('two') {
          <span> 🍌🍌 </span>
        }
        @case ('tree') {
          <span> 🍌🍌🍌 </span>
        }
        @default {
          <span> 😥 </span>
        }
      }
    </div>
    <section class="box">
      <div
        [class]="{
          padded: true,
          'other-class': hasClass,
          'sampleOther-class_name': isVisible(),
          really: true,
        }"
      >
        Ten element ma dopiętych klika klas css, w zależności od tego czy value
        danego property to <code>true</code> czy <code>false</code>
      </div>
      <div
        [style]="{
          backgroundColor: 'lightblue',
          color: 'black',
          fontSize: '20px',
          paddingLeft: '40px',
        }"
      >
        Podobnie, obiektem można dodać style css w postaci
        <code>&#123;camelCase: value&#125;</code>
      </div>
      <div [style.backgroundColor]="myRedColor" style="color: #ccc">
        a tak można dodać tylko jedną regułę stylu - zależną np. od wartości
        pola w klasie
      </div>
    </section>
    <div class="message is-info">
      <div class="message-body">
        Podstawowe zastosowanie bindowania do <code>[class]</code> oraz
        <code>[style]</code> rozwinęło się na tyle, że dyrektywy
        <code>[ngClass]</code> oraz <code>[ngStyle]</code> moga nam w ogóle nie
        być potrzebne.
      </div>
    </div>
    <blockquote>
      Jednak możemy ich dalej użyć jako atrybuty
      <code>[ngClass]</code> / <code>[ngStyle]</code> w następujący sposób:
    </blockquote>
    <div
      [ngClass]="{
        padded: true,
        'other-class': hasClass,
        'sampleOther-class_name': isVisible(),
        really: true,
      }"
    >
      Ten element ma dopiętych klika klas css, w zależności od tego czy value
      danego property to <code>true</code> czy <code>false</code>
    </div>
    <div
      [ngStyle]="{
        backgroundColor: 'lightblue',
        color: 'black',
        fontSize: '20px',
        paddingLeft: '40px',
      }"
    >
      Podobnie, obiektem można dodać style css w postaci
      <code>&#123;camelCase: value&#125;</code>
    </div>
  `,
  styles: [
    `
      .bg-red {
        background-color: #672020;
        color: #ccc;
      }
      .padded {
        padding: 10px;
      }
    `,
  ],
})
export class BasicDirectivesComponent {
  protected readonly isVisible = signal(false);

  hasClass = true;
  optionNumber: MyFlag = 'tree';
  myRedColor = '#672020';
}
