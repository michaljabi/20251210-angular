import { Component, signal } from '@angular/core';
import { Field, form, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-driven-from',
  imports: [Field],
  template: `
    <h2>Obsługa formularza (wciąż experimental! 🧪)</h2>
    <header class="subtitle is-family-monospace">signal-driven-form</header>
    <form (submit)="handleFormSubmit($event)" novalidate>
      <fieldset class="field ">
        <label>
          Name:
          <input
            [class]="[
              'input',
              sampleForm.name().invalid() && sampleForm.name().touched()
                ? 'is-danger'
                : '',
            ]"
            [field]="sampleForm.name"
          />
        </label>
        @if (sampleForm.name().invalid() && sampleForm.name().touched()) {
          <p class="help is-danger">
            @for (error of sampleForm.name().errors(); track error) {
              <span>{{ error.message }}</span>
            }
          </p>
        }
      </fieldset>
      <fieldset class="field">
        <label>
          Post:
          <textarea
            [class]="[
              'textarea',
              sampleForm.post().invalid() && sampleForm.post().touched()
                ? 'is-danger'
                : '',
            ]"
            [field]="sampleForm.post"
          ></textarea>
        </label>
        @if (sampleForm.post().invalid() && sampleForm.post().touched()) {
          <p class="help is-danger">
            @for (error of sampleForm.post().errors(); track error) {
              <span>{{ error.message }}</span>
            }
          </p>
        }
      </fieldset>
      <fieldset style="text-align: right">
        <button class="button is-primary" type="submit">
          Wyślij formularz
        </button>
      </fieldset>
      @if (sampleForm().invalid() && errorMessage()) {
        <div class="notification is-danger mt-3">
          {{ errorMessage() }}
        </div>
      }
    </form>
  `,
})
export class SignalDrivenFromComponent {
  // https://angular.dev/essentials/signal-forms

  protected readonly errorMessage = signal('');
  protected readonly formModel = signal({
    name: '',
    post: '',
  });
  protected readonly sampleForm = form(this.formModel, (model) => {
    // pole "name" jest wymagane:
    required(model.name, { message: 'to pole jest wymagane' });
    // pole "post" musi mieć 20 znaków, ale zauważ, że nie jest wymagane:
    minLength(model.post, 20, { message: 'min. 20 znaków' });
  });

  handleFormSubmit(event: Event): void {
    event.preventDefault();

    if (this.sampleForm().invalid()) {
      // nie ma markAllAsTouched jeszcze...
      // this.sampleForm().markAsTouched();
      this.sampleForm.name().markAsTouched();
      this.sampleForm.post().markAsTouched();
      this.errorMessage.set('Popraw błędy w formularzu !');
      return;
    }
    alert(JSON.stringify(this.formModel()));
  }
}
