import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state-management/main.state';


@Component({
  selector: 'app-store-in-action',
  templateUrl: './store-in-action.component.html',
  styleUrls: ['./store-in-action.component.less']
})
export class StoreInActionComponent implements OnInit {
    data  : number =  0;
  constructor(private store:Store<any>) {
     this.store.select('mainStoreReducer').subscribe((data : State)=> {
            this.data = data.counter;
             console.log(data.counter);
          });


   }

  ngOnInit() {

      this.store.dispatch({ type : 'INCREMENT' })

  }

}