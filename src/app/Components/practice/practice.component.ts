import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        this.data = response;
      });
  }

  @Output() customEvent = new EventEmitter<string>();

  sendData() {
    this.customEvent.emit('Hello from Child Component!');
    alert('data send');
  }
}
