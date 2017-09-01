import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DevsListComponent} from './devs-list/devs-list.component';
import {DevsAddComponent} from './devs-add/devs-add.component';
import {DevsDetailComponent} from './devs-detail/devs-detail.component';
import {DevsEditComponent} from './devs-edit/devs-edit.component';
import {AuthGuard} from '../security/authguard';

const devsRoutes: Routes = [
  {path: 'devs', component: DevsListComponent, canActivate: [AuthGuard]},
  {path: 'devs/add', component: DevsAddComponent, canActivate: [AuthGuard]},
  {path: 'devs/:id', component: DevsDetailComponent, canActivate: [AuthGuard]},
  {path: 'devs/:id/edit', component: DevsEditComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(devsRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class DevsRoutingModule { }
