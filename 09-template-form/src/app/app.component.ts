import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '09-template-form';

  student = {
    name: '',
    email: '',
    password: '', 
    city: '',
    gender: ''
    
  };

  cities = ['Mumbai', 'Delhi', 'Chennai', 'Pune'];

  onFormSubmit(f: NgForm) {
    console.log(f.value);
  }
}
