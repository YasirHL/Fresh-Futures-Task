import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  users: FormGroup;

  constructor(private formBuilder: FormBuilder, private backendService: BackendService) {
    this.users = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  ngOnInit() { }

  addUser() {
    this.backendService.addUser(this.users.value);
    console.log(this.users.value)
  }

}