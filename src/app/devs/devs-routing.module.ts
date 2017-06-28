import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DevsListComponent} from './devs-list/devs-list.component';
import {DevsAddComponent} from './devs-add/devs-add.component';
import {DevsDetailComponent} from './devs-detail/devs-detail.component';
import {DevsEditComponent} from './devs-edit/devs-edit.component';

const devsRoutes: Routes = [
  {path: 'devs', component: DevsListComponent},
  {path: 'devs/add', component: DevsAddComponent},
  {path: 'devs/:id', component: DevsDetailComponent},
  {path: 'devs/:id/edit', component: DevsEditComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(devsRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class DevsRoutingModule { }
