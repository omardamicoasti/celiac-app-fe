import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:User[] = [];
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void { 
    this.userService.getUsers().subscribe(result => { 
      this.users = result
    })
  }
 
}





