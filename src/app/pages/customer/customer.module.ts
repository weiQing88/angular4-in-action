import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // 响应式驱动表单模块 
import { CommonModule } from '@angular/common';    // 必须要在模块中添加 CommonModule
import { CustomerComponent } from './customer.component';
import { CustomerRoutesModule } from './customer.route.module';


@NgModule({
     declarations : [CustomerComponent],
     imports : [ ReactiveFormsModule, CommonModule, CustomerRoutesModule],
     exports : [ CustomerComponent ]

})

export class CustomerModule {}