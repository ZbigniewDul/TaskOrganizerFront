import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/security/security.service';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { employeeCreationDTO } from '../employees.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeesService: EmployeesService,
    private securityService: SecurityService,
    private router: Router) { }

  nonSelectedTasks: multipleSelectorModel[];

  errors: string[] = []

  ngOnInit(): void {
    this.employeesService.postGet().subscribe(response => {
      this.nonSelectedTasks = response.tasks.map(task => {
        return <multipleSelectorModel>{key: task.id, value: task.name};
      });
    });
  }
  saveChanges(employeeCreationDTO: employeeCreationDTO){
    const userName = this.securityService.getFieldFromJWT('name');
    employeeCreationDTO.userName = userName;
    console.log(userName);
    this.employeesService.create(employeeCreationDTO).subscribe(() =>{
      this.router.navigate(['/employees']);
    })
  }
}
