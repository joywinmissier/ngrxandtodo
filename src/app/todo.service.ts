import { Injectable } from '@angular/core';
import { Todo } from './addtodo/addtodo.component';

@Injectable()
export class TodoService {

  public todoArrayData = [
    {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        phone: '1234567890'
        
    },
    {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        phone: '0987654321'
      
    }
];

  constructor() { }

  getAllTodos() {
    return this.todoArrayData;
  }

  deleteById(id){
    for (var i in this.todoArrayData) {
      if (this.todoArrayData[i].id === id) {
        this.todoArrayData.splice(parseInt(i), 1);
      }
  } 
  }

  addTodo(todoData){
    var todoid = this.todoArrayData.length;
    todoData.id = ++todoid;
    this.todoArrayData.push(todoData);
    console.log(this.todoArrayData);
    return todoData;
  }

  editTodo(id,todoDatas){
    var todoSaveArray = this.todoArrayData;
    for (var i in todoSaveArray) {
      if (todoSaveArray[i].id === id) {
          todoSaveArray[i] = todoDatas;
      }
  }
  // return todoDatas;
  }

  getTodoById(id: number): Todo {
    
    return this.todoArrayData
      .filter(todo => todo.id === id)
      .pop();
}

}
