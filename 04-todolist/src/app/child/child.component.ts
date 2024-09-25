import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.css']
})
export class TodoBoxComponent {
  @Input() todos: Todo[] = [];
  @Output() onComplete = new EventEmitter<number>();

  completeTask(id: number) {
    this.onComplete.emit(id);
  }
}
