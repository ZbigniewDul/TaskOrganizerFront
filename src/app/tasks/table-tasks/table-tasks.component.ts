import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { taskDTO } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.css']
})
export class TableTasksComponent implements OnInit {

  constructor(private homeService: HomeService,
    private tasksService: TasksService) { }

  tasksNotInProgress: taskDTO[] = [];
  tasksInProgress: taskDTO[] = [];
  tasksCompleted: taskDTO[] = [];

  columnsToDisplayNotInProgress = ['tasksNotInProgress', 'putToInProgress'];
  columnsToDisplayInProgress = ['tasksInProgress', 'actions'];
  columnsToDisplayCompleted = ['tasksCompleted', 'delete'];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.homeService.getNotInProgress().subscribe(tasksNotInProgress => {
      this.tasksNotInProgress = tasksNotInProgress;
    });
    this.homeService.getInProgress().subscribe(tasksInProgress => {
      this.tasksInProgress = tasksInProgress;
    });
    this.homeService.getCompleted().subscribe(tasksCompleted => {
      this.tasksCompleted = tasksCompleted;
    });
  }

  putToInProgress(id: number, taskDTO: taskDTO){
    taskDTO.taskStatus = 1;
    this.tasksService.editStatus(id, taskDTO).subscribe(() =>{
      this.loadData();
    });
  }

  putToNotInProgress(id: number, taskDTO: taskDTO){
    taskDTO.taskStatus = 0;
    this.tasksService.editStatus(id, taskDTO).subscribe(() =>{
      this.loadData();
    });
  }

  putToCompleted(id: number, taskDTO: taskDTO){
    taskDTO.taskStatus = 2;
    this.tasksService.editStatus(id, taskDTO).subscribe(() =>{
      this.loadData();
    });
  }

  deleteTask(id: number){
    this.tasksService.delete(id).subscribe(() =>{
      this.loadData();
    });
  }

}
