import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendService implements OnInit {

  url: string = "http://httpbin.org/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { }

  addUser(user: any) {
    this.httpClient.post(this.url + "post", { user }, this.httpOptions)
      .subscribe((res: any) => { console.log("user:", res) })
  }

  getUserList(): Observable<any> {
    return this.httpClient.get<any>('../../assets/data/user.json');
  }
}