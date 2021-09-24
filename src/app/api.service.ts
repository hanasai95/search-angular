import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { }

  getUsers(name: string, per_page: number) {
    return this.http.get(`https://api.github.com/search/users?q=${name}&per_page=${per_page}`)
  }
}
