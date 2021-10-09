import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { userDTO } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-index-users',
  templateUrl: './index-users.component.html',
  styleUrls: ['./index-users.component.css']
})
export class IndexUsersComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  users: userDTO[];
  page: number = 1;
  pageSize: number =5;
  currentPage =1;
  totalAmountOfRecords;
  columnsToDisplay = ['name', 'actions'];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.securityService.getUsers(this.page, this.pageSize)
    .subscribe((httpResponse: HttpResponse<userDTO[]>) =>{
      this.users = httpResponse.body;
      this.totalAmountOfRecords = httpResponse.headers.get("totalAmountOfRecords");
    });
  }

  makeModerator(name: string){
    this.securityService.makeModerator(name).subscribe(() =>{
      this.loadUsers();
    })
  }

  removeModerator(name: string){
    this.securityService.removeModerator(name).subscribe(() =>{
      this.loadUsers();
    })
  }

  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

}
