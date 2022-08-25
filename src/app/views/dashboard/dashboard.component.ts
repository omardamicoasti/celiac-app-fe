import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:User[] = [];

  columns: any[] = [];
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUser();

    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'surname', header: 'Surname' },
      { field: 'dateOfBirth', header: 'Birth' },
      { field: 'username', header: 'Username' },
      { field: 'email', header: 'Email' },
      { field: 'role', header: 'Role' },
    ];
  }

  getAllUser(): void { 
    this.userService.getAllUsers().subscribe(result => { 
      this.users = result
    })
  }
 
}





