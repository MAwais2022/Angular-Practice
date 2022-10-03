import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  product: any;
  constructor(private data: ServiceService) {
    data.users().subscribe((data) => {
      console.log('data', data);
      this.product = data;
    });
    // console.log(this.users);
  }
}
