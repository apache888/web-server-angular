import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { DevsListComponent } from './devs-list/devs-list.component';
import { DevsAddComponent } from './devs-add/devs-add.component';
import { DevsDetailComponent } from './devs-detail/devs-detail.component';
import { DevsEditComponent } from './devs-edit/devs-edit.component';
import {DevsRoutingModule} from './devs-routing.module';
import {DevService} from './dev.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DevsRoutingModule
  ],
  declarations: [
    DevsListComponent,
    DevsAddComponent,
    DevsDetailComponent,
    DevsEditComponent],
  providers: [DevService]
})
export class DevsModule { }
