import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes, Router} from '@angular/router'
import { IndexComponent } from '../index/index.component';

const appRoutes:Routes=[
  {path:'index',component:IndexComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
