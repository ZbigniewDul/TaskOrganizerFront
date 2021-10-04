import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { IndexEmployeeComponent } from './employees/index-employee/index-employee.component';
import { HomeComponent } from './home/home/home.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { IndexTaskComponent } from './tasks/index-task/index-task.component';

const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'tasks', component: IndexTaskComponent},
  {path: 'tasks/create', component: CreateTaskComponent},
  {path: 'tasks/edit/:id', component: EditTaskComponent},

  {path: 'employees', component: IndexEmployeeComponent},
  {path: 'employees/create', component: CreateEmployeeComponent},
  {path: 'employees/edit/:id', component: EditEmployeeComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
