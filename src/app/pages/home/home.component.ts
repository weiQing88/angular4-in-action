import { Component, OnInit, ElementRef, AfterViewInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/of';

import * as ActionsCollected from  '../../store/actions/app.action'; 
import { take } from 'rxjs/operator/take';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{
      numbers : string = '10,145,267';
      inputSubscription = null;
      alive : boolean = true; // 同时取消订阅多个订阅者方法
      arry : any[] = [1,2,3,4,5,6,7,8,99,12,334];
      constructor(private _router : Router, 
                  private store:Store<any>,
                  private elementRef : ElementRef
                ){
             this.store.select('testReducer').subscribe((data) => {
                    console.log('不会执行这里');
             });

      }

      ngOnInit() {
           let  ofInstance =  Observable.of(this.arry)
                                         .subscribe(value => { console.log(value) })
      }

      // 获取真实元素节点
      ngAfterViewInit(){
          let inputNode = this.elementRef.nativeElement.querySelector('#rxjs-input');

          this.inputSubscription = Observable.fromEvent(inputNode,'input')
                    .takeWhile(() => this.alive )   // 同时取消订阅多个订阅者方法
                    .map((event :any) => event.target.value )
                    .filter(value => value.length >= 2 )
                    .subscribe(value => { console.log(value) })
          
      }


     // Observable 当有数据产生时才会推送给订阅者，所以它可能会无限次向订阅者推送数据。
     ngOnDestroy(){ 
             this.alive = false; // 同时取消订阅多个订阅者方法
             //  this.inputSubscription.unsubscribe();
        }
    

      testEffect(){
          //   this.store.dispatch({type : 'INCREMENT' ,payload : 'xxxx'})
      }
         


} 