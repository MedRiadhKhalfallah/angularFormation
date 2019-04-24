import {Component, OnInit} from '@angular/core';
import {TodoServiceService} from '../service/todo-service.service';
import {TodoModule} from '../Model/todo/todo.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // todoService: TodoServiceService;
  todoListe: TodoModule[] = [];
  todoAdd: TodoModule = new TodoModule();

  constructor(private todoService: TodoServiceService) {

  }

  ngOnInit() {
    this.todoListe = this.getTodoListe();
  }

  getTodoListe() {
    return this.todoService.getData();
  }

  addTodo(todo: TodoModule) {
    this.todoService.addTodo(todo);
    this.todoAdd = new TodoModule();
  }

  deleteTodo(todo: TodoModule) {
    this.todoService.deleteTodo(todo);
  }

  updateTodo(todo: TodoModule, index: number) {
    this.todoService.updateTodo(todo, index);
  }
}
