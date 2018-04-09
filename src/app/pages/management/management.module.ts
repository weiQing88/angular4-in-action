import {NgModule, Component} from '@angular/core';
import {CommonModule} from "@angular/common";

import { ManagementComponent } from './management.component';
import { Routes, RouterModule } from '@angular/router';

// 惰性加载
const managementRoutes : Routes = [
     {
        path : '',    // !!! path 必须设置空字符串 !!!
        component : ManagementComponent
     }
];

@NgModule({
     declarations : [ ManagementComponent ],
     imports : [ CommonModule,RouterModule.forChild(managementRoutes) ],
      providers : [],
      exports : [ManagementComponent]
})
 
export class ManagementModule {}