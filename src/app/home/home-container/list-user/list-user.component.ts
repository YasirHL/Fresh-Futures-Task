import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {

  users: any;

  constructor(private backendService: BackendService) { }

  ngOnInit(){this.getUsers();}

  getUsers()
  {
    this.backendService.getUserList().subscribe((res: any) => {this.users = res});
  }

}
