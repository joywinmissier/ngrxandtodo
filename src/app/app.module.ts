import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';
import { CountComponent } from './count/count.component';
import { TodoService } from './todo.service';
import { AddtodoComponent } from './addtodo/addtodo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'count', pathMatch: 'full'},
  { path: 'count', component: CountComponent },
  { path: 'test', component: TestComponent },
  { path: 'add', component: AddtodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CountComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count1: counterReducer }),
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
