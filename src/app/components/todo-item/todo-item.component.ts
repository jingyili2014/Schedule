import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // set dynamic class
  setClass() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;

    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    
  }
}
