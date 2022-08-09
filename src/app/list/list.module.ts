import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    SharedModule
  ],
  declarations: [ListPage, UsersComponent]
})
export class ListPageModule {}
