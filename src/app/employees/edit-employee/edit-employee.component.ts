import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from 'src/app/security/security.service';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { employeeCreationDTO, employeeDTO } from '../employees.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private employeesService: EmployeesService,
    private securityService: SecurityService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  model: employeeDTO;

  selectedTasks: multipleSelectorModel[];
  nonSelectedTasks: multipleSelectorModel[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.employeesService.putGet(params.id).subscribe(putGetDTO =>{
        this.model = putGetDTO.employee;

        this.selectedTasks = putGetDTO.selectedTasks.map(task =>{
          return <multipleSelectorModel>{key: task.id, value: task.name};
        });
        this.nonSelectedTasks = putGetDTO.nonSelectedTasks.map(task =>{
          return <multipleSelectorModel>{key: task.id, value: task.name};
        });
      });
    });
  }

  saveChanges(employeeCreationDTO: employeeCreationDTO){
    const userName = this.securityService.getFieldFromJWT('name');
    employeeCreationDTO.userName = userName;
    this.employeesService.edit(employeeCreationDTO, this.model.id).subscribe(() =>{
      this.router.navigate(['/employees']);
    });
  }

}
