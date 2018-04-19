import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AppEffect {
     // 注入 Actions 【The variable name of Observable type should end with $ 】
    constructor(private actions$: Actions) {} 
      // 【Now to perform side effects we can use RxJS operators such as mergeMap, switchMap and exhaustMap etc；】
      // 【In the above class we are using RxJS do operator where we can navigate using Router.navigate. I 】
    @Effect( { dispatch: false })   //  prevent dispatching
    doSomething$: Observable < Action > = this.actions$.ofType('TESTACTION').do( action => { console.log(action); return action } )
}




