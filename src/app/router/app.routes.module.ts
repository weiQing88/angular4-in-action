import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// component
import { AboutComponent } from '../pages/about/about.component';
import { EditComponent } from '../pages/edit/edit.component';
import { HomeComponent } from '../pages/home/home.component';
import { ErrorComponent } from '../pages/error/error.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';

import { CheckpointServer } from '../util/checkpoint.service';

export const rootRouterConfig : Routes = [
    {
       path : '',
       redirectTo : 'home',
       pathMatch : 'full'
    },
    {
       path : 'about',
       component :  AboutComponent 
    },{
         path : 'customer',
         //component : CustomerComponent,
         loadChildren : '../pages/customer/customer.module#CustomerModule'  // 在 angular4中不能带.ts后缀 【 惰性加载 】
    },{
        path : 'edit',
        component : EditComponent
    },{
        path : 'home',
        component : HomeComponent
    },{
        path : 'management',
          // component : ManagementComponent,   
         // children : [],
         //  canActivate : [CheckpointServer],
         //  canActivateChild : [CheckpointServer]
         loadChildren : '../pages/management/management.module#ManagementModule'    // 在 angular4中不能带.ts后缀 【 惰性加载 】
       
    },
    {
        path : 'login',
        component : LoginComponent,
        canActivate : [CheckpointServer]
    },
    {
        path : 'register',
        component : RegisterComponent,
        canActivate : [CheckpointServer]
    },
    {
        path : 'error',
        component : ErrorComponent,
    },
   {
        path : '**',
        redirectTo : 'error',
        pathMatch : 'full'
    }
];




@NgModule({
     imports : [ RouterModule.forRoot(rootRouterConfig) ],
     exports : [ RouterModule ]
})

export class RootRouterModule {}