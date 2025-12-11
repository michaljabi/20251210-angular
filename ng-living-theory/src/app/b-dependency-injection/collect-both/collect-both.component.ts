import { Component } from '@angular/core';
import { VegetableService } from '../vegetable.service';
import { CommunicateWithLongDistanceComponent } from '../communicate-with-long-distance.component';

@Component({
  selector: 'app-collect-both',
  imports: [CommunicateWithLongDistanceComponent],
  template: `<section>
    <app-communicate-with-long-distance />
    <app-communicate-with-long-distance />
  </section> `,
  styles: ``,
 // providers: [VegetableService],
})
export class CollectBothComponent {}
