import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeContainerComponent } from '../home/home-container/home-container.component';
import { AddUserComponent } from '../home/home-container/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BackendService } from '../service/backend.service';
import { ListUserComponent } from '../home/home-container/list-user/list-user.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  declarations: [
    HomeContainerComponent,
    AddUserComponent,
    ListUserComponent 
                              
  ],
  exports:[
    CommonModule, 
    FormsModule,
    HomeContainerComponent,
    AddUserComponent,
    ListUserComponent
  ],
  providers: [BackendService],
})
export class SharedModule { }
