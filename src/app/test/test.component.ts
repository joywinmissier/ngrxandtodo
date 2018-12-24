import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { Store, select } from '@ngrx/store';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  count$: Observable<number>;
 
  public todo = [] ;

  constructor( private store: Store<{ count: number }>, private todoService : TodoService, private router: Router) {
    this.count$ = store.pipe(select('count1'));
  }

  ngOnInit() {
    this.todo = this.todoService.getAllTodos();
  }

  deleteById(id){
    this.todoService.deleteById(parseInt(id));
  }

  add(){
    this.router.navigate(['/add'],{queryParams: {mode: 'add'}});
  }

  edit(dataId){
    this.router.navigate(['/add'],{queryParams: {mode: 'edit',id:dataId}});

  }


}
