import { Component, NgModule } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private service: ServiceService) {}

  form = {
    title: '',
    price: '',
    category: '',
    description: '',
  };
  userLogin() {
    this.service.SaveUser(this.form).subscribe((result) => {
      console.log(result);
    });
  }
}
