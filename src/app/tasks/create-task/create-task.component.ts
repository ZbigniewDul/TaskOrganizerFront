import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/security/security.service';
import { taskCreationDTO } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private tasksService: TasksService,
    private securityService: SecurityService,
     private router: Router) { }

  errors: string[] = [];

  form: any;

  ngOnInit(): void {
  }

  saveChanges(taskCreationDTO: taskCreationDTO){
    const userName = this.securityService.getFieldFromJWT('name');
    taskCreationDTO.userName = userName;
    this.tasksService.create(taskCreationDTO).subscribe(() =>{
      this.router.navigate(['/tasks']);
    });
  }

}
