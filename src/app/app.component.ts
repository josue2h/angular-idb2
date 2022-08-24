import { Component, VERSION } from '@angular/core';
import { SchoolService } from './service/school.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public school$: SchoolService) {}
}
