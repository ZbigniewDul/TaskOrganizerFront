import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { IndexEmployeeComponent } from './employees/index-employee/index-employee.component';
import { HomeComponent } from './home/home/home.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsModeratorGuard } from './is-moderator.guard';
import { IndexUsersComponent } from './security/index-users/index-users.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { IndexTaskComponent } from './tasks/index-task/index-task.component';

const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'tasks', component: IndexTaskComponent, canActivate: [IsModeratorGuard]},
  {path: 'tasks/create', component: CreateTaskComponent, canActivate: [IsModeratorGuard]},
  {path: 'tasks/edit/:id', component: EditTaskComponent, canActivate: [IsModeratorGuard]},

  {path: 'employees', component: IndexEmployeeComponent, canActivate: [IsModeratorGuard]},
  {path: 'employees/create', component: CreateEmployeeComponent, canActivate: [IsModeratorGuard]},
  {path: 'employees/edit/:id', component: EditEmployeeComponent, canActivate: [IsModeratorGuard]},

  {path: 'users', component: IndexUsersComponent, canActivate: [IsAdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
