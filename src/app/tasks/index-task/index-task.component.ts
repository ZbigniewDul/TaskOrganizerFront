import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { taskDTO } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-index-task',
  templateUrl: './index-task.component.html',
  styleUrls: ['./index-task.component.css']
})
export class IndexTaskComponent implements OnInit {

  constructor(private tasksService: TasksService,
    private router: Router) { }

  tasks: taskDTO[];

  columnsToDisplay = ['name', 'dateToFinished', 'timeLeft', 'actions'];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
    this.tasksService.getAll(this.currentPage, this.pageSize).subscribe((response: HttpResponse<taskDTO[]>) =>{
      this.tasks = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    });
  }

  delete(id:number){
    this.tasksService.delete(id).subscribe(() =>{
      this.loadTasks();
    });
  }

  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadTasks();
  }

  formatDate(date: Date){
    return new Date(date).toLocaleString('pl-PL', {year:'numeric', month:'2-digit', day:'2-digit'});
  }

}
