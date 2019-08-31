import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  
  title: string;
  newId: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.newId = this.todoService._id;
  }

  onSubmit() {

    this.newId = this.newId + 1;

    const todo = {
      id: this.newId,
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }

}
