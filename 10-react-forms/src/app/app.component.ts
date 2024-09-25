import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = '10-react-forms';

  userForm!: FormGroup;
  qualifications = [
    'Higher Secondary',
    'Graduate',
    'Post Graduate',
    'Doctorate',
  ];                 

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern('^[a-zA-Z]+$')
      ]),
      lastName: new FormControl(),
      email: new FormControl(),
      qualification: new FormControl('Graduate'),
    });
  }

  onFormSubmit() {
    console.log(this.userForm.value);
  }
}
 