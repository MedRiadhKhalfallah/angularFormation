import {Injectable} from '@angular/core';
import {TodoModule} from '../Model/todo/todo.module';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todoData: TodoModule[] = [];

  constructor() {
    this.todoData = [
      new TodoModule('tache1', '7ata chay 1'),
      new TodoModule('tache2', '7ata chay 2'),
      new TodoModule('tache3', '7ata chay 3'),
      new TodoModule('tache4', '7ata chay 4'),
      new TodoModule('tache5', '7ata chay 5'),
    ];
  }

  getData() {
    return this.todoData;
  }

  deleteTodo(todo: TodoModule) {
    let index = this.todoData.indexOf(todo);
    this.todoData.splice(index, 1);
  }

  addTodo(todo: TodoModule) {
    this.todoData.push(todo);
  }

  updateTodo(todo: TodoModule, index: number) {
    this.todoData[index].name = todo.name;
    this.todoData[index].tache = todo.tache;
  }
}
