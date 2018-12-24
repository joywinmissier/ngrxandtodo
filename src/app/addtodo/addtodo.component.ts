import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


export class Todo {
  constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public phone: string
  ) { }
}


@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  public todoDetail = <Todo>{};
  public mode;
  public id;
  constructor(private activatedRoute: ActivatedRoute, private todoService : TodoService,private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params['mode']);
      this.mode = params['mode'];
      console.log(params['id']);
      this.id = params['id'];
      if(this.id !== undefined){
   
          this.todoDetail = this.todoService.getTodoById(parseInt(this.id));
          console.log(this.todoDetail);  
        
      }
     }); 
  }

  addTodo(){
    
    if(this.mode === 'add') {
      this.todoService.addTodo(this.todoDetail);
      console.log(this.todoDetail);
      this.router.navigate(['/test']);
    }
    else {
      this.todoService.editTodo(this.id,this.todoDetail);
      this.router.navigate(['/test']);
    }


  }

}
