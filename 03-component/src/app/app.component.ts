import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03-component';
  //  message : String = "Hello";

  // employees: any=[
  //   {
  //     name:"Yadullah",
  //     age:21,
  //     place:"Mumbai"
  //   },
  //   {
  //     name:"Shubham",
  //     age:21,
  //     place:"Jalgaon"
  //   },
  //   {
  //     name:"Suhas",
  //     age:21,
  //     place:"Mysore"
  //   },
  //   {
  //     name:"Jateen",
  //     age:21,
  //     place:"Dombivli"
  //   }
  // ]

  onDataLoadFromChild(data:String){
    console.log(data);
  }
}
