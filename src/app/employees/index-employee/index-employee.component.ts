import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { employeeDTO } from '../employees.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-index-employee',
  templateUrl: './index-employee.component.html',
  styleUrls: ['./index-employee.component.css']
})
export class IndexEmployeeComponent implements OnInit {

  constructor(private employeesService: EmployeesService,
    private router: Router) { }

  employees: employeeDTO[];
  columnsToDisplay = ['name', 'tasksAmount', 'actions'];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(){
    this.employeesService.getAll(this.currentPage, this.pageSize).subscribe((response: HttpResponse<employeeDTO[]>) =>{
      this.employees = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    });
  }

  delete(id:number){
    this.employeesService.delete(id).subscribe(() =>{
      this.loadEmployees();
    });
  }

  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadEmployees();
  }

}
