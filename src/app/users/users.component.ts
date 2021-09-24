import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Array<any>;
  page:number;
  pageSize:number;
  selected:any;
  filter:string;
  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.users = this.userService.index();
    if(!this.users.length){
      this.router.navigate(['/'])
    }
    this.page = 1;
    this.pageSize = 10;
    this.selected = this.users[0];
  }


  onSelect(selected){
    this.selected = selected;
  }

  doFilter(){
    if(this.filter === ''){
      this.users = this.userService.index();
    }else{
      this.users = this.userService.index().filter((user)=> user.login.includes(this.filter));
    }
  }

}
