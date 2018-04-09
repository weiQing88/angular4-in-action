import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component'; 

// 惰性加载
const routes : Routes = [
     {
         path : '',    // !!! path 必须设置空字符串 !!!
         component : CustomerComponent
     }
];

@NgModule({
     imports : [ RouterModule.forChild(routes) ],
     exports : [ RouterModule ]
})

export class CustomerRoutesModule {}