import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { taskCreationDTO } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private tasksService: TasksService,
     private router: Router) { }

  errors: string[] = [];

  form: any;

  ngOnInit(): void {
  }

  saveChanges(taskCreationDTO: taskCreationDTO){
    this.tasksService.create(taskCreationDTO).subscribe(() =>{
      this.router.navigate(['/tasks']);
    });
  }

}
