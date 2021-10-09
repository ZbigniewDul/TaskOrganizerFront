import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from 'src/app/security/security.service';
import { taskDTO } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
    private securityService: SecurityService,
    private router: Router) { }

  model!: taskDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.tasksService.getById(params.id).subscribe(task =>{
        this.model = task;
      });
    });
  }

  saveChanges(taskDTO: taskDTO){
    const name = this.securityService.getFieldFromJWT('name');
    taskDTO.userName = name;
    this.tasksService.edit(this.model.id, taskDTO).subscribe(() =>{
      this.router.navigate(["/tasks"])
    });
  }

}
