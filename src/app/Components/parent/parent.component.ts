import { Component } from '@angular/core';
import { PracticeComponent } from '../practice/practice.component';

@Component({
  selector: 'app-parent',
  imports: [PracticeComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  message: string = '';

  receiveData(data: string) {
    this.message = data;
  }
}
