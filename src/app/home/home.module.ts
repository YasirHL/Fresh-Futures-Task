import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AddUserComponent } from './home-container/add-user/add-user.component';
import { ListUserComponent } from './home-container/list-user/list-user.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  
  declarations: [
    HomePage,
    HomeContainerComponent,
    AddUserComponent,
    ListUserComponent   
  ],
  exports:[ListUserComponent] // <-- To use in another module
})
export class HomePageModule {}
