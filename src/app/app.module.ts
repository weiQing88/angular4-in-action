import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './core/app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


// api 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './api/test-data';

// store
import { StoreModule } from '@ngrx/store';
import { mainStoreReducer } from './state-management/main.reducer';
// effects
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './state-management/main-effects';
import { AppEffect } from './store/efffects/app.effect';



import { HeaderComponent } from './pages/header/header.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

//router
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootRouterModule } from './router/app.routes.module';
// let RootRouterModule : ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);


// service 
import { LocalStorage } from '../app/util/local.store.serve';
import { CheckpointServer } from '../app/util/checkpoint.service';


// custom module
import { AboutModule } from '../app/pages/about/about.module';
import { CustomerModule } from '../app/pages/customer/customer.module';
import { ManagementModule } from  '../app/pages/management/management.module';

// Antd UI
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ mainStoreReducer }),   //   EffectsModule.forRoot([AppEffect, MainEffects]), 
    AboutModule,         // custom 
    CustomerModule,       // custom 
    ManagementModule,
    InMemoryWebApiModule.forRoot(TestData),
    NgZorroAntdModule.forRoot(),
    RootRouterModule,  // 要把路由放到最后面
  ],
  providers: [LocalStorage, CheckpointServer],
  bootstrap: [AppComponent]
})

export class AppModule { }




