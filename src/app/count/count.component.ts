import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import { Increment, Decrement, Reset } from '../counter.action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  title = 'app';
  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>,private router : Router) {
    this.count$ = store.pipe(select('count1'));
  }
 
  increment() {
    this.store.dispatch(new Increment());
  }
 
  decrement() {
    this.store.dispatch(new Decrement());
  }
 
  reset() {
    this.store.dispatch(new Reset());
  }

  ngOnInit() {
  }

  route(){
 this.router.navigate(['/test']);
  }
}
