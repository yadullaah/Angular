import { Component , EventEmitter, input, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // @Input() childInput:String="";

  // @Input() employeeList:any="";

  @Output() childOutputEmitter = new EventEmitter<String>();

  onSendData(){
    this.childOutputEmitter.emit(input.value)
  }


}
