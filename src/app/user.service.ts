import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list: Array<any>;
  constructor() {
    this.list = [];
  }

  store(list: Array<any>) {
    this.list = list;
  }

  index(){
    return this.list;
  }

}
