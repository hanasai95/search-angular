import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private name: string;
  private perPage: number;
  loading: boolean;

  nameError: boolean;
  perPageError: boolean;
  constructor(private api: ApiService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.name = '';
    this.perPage = 1;
    this.loading = false;
    this.nameError = false;
    this.perPageError = false;
  }

  onSearch() {
    this.nameError = false;
    this.perPageError = false;

    if (this.name === '') { this.nameError = true; }
    if (this.perPage < 1 || this.perPage > 100) { this.perPageError = true; }

    if (this.name !== '' && this.perPage <= 100 && this.perPage >= 1) {
      this.loading = true;
      this.api.getUsers(this.name, this.perPage)
        .subscribe((data: any) => {
          this.loading = false;
          this.userService.store(data.items);
          this.router.navigate(['/users'])
        }, (err) => console.log(err))
    }
  }

}
