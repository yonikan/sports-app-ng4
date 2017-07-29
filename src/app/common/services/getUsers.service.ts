import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetUsersService {

  results;

  constructor (private http: HttpClient) {

  }

  getUsers() {
    this.http.get('/assets/users.json').subscribe(data => {
      this.results = data['results'];
    });

    return this.results;
  }
  
}
