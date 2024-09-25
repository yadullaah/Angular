import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // number: number = 0;

  // increment() {
  //   if (this.number < 15) {
  //     this.number++;
  //   }
  // }

  // decrement() {
  //   if (this.number > 0) {
  //     this.number--;
  //   }
  // }

  // reset() {
  //   this.number = 0;
  // }
value:String="";
@ViewChild("box", {static:true})
inputElement!:ElementRef;
  addNewText(){

    this.value = this.inputElement.nativeElement.value;

  }

  // title = 'first-app';
  //name :String ="Yadullah";

// user:any={
//   name:"test",
//   email:"test@gmail.com"

// }  
  // getUserName():String{
  //   return this.name;
  // }

// link: String ="https://www.google.co.in/";

// imglink: String= "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";
// imageWidth = 200;
// imageHeight= 200;

// disabled=true;

// showAlert(){
//   alert("Alert button");
// }

// value:String =""
// addText(box:String){
// this.value = box;
// }

// value:String =""
// onAddText(box1: HTMLInputElement){
//   this.value= box1.value;
// }
}
