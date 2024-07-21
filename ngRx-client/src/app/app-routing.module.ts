import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginRegisterComponent} from './components/login-register/login-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login-register',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lazy-page',
    loadChildren: () => import('./components/lazy-page/lazy-page.module').then(m => m.LazyPageModule)
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
