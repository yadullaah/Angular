import { Component } from '@angular/core';

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [
    { id: 1, task: 'Learn Angular', completed: false },
    { id: 2, task: 'Build a project', completed: true },
    { id: 3, task: 'Deploy app', completed: false }
  ];

  // Function to delete a task
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // Function to mark task as completed
  markAsCompleted(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = true;
    }
  }
}
