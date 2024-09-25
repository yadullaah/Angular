import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-completed-box',
  templateUrl: './completed-box.component.html',
  styleUrls: ['./completed-box.component.css']
})
export class CompletedBoxComponent {
  @Input() completedTodos: Todo[] = [];
  @Output() onDelete = new EventEmitter<number>();

  deleteTask(id: number) {
    this.onDelete.emit(id);
  }
}
