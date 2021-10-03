import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MarkdownModule } from 'ngx-markdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http'; 

import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { FormTaskComponent } from './tasks/form-task/form-task.component';
import { IndexTaskComponent } from './tasks/index-task/index-task.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { FormEmployeeComponent } from './employees/form-employee/form-employee.component';
import { IndexEmployeeComponent } from './employees/index-employee/index-employee.component';
import { MenuComponent } from './menu/menu/menu.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { DisplayErrorComponent } from './utilities/display-error/display-error.component';
import { FormEditTaskComponent } from './tasks/form-edit-task/form-edit-task.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    EditTaskComponent,
    FormTaskComponent,
    IndexTaskComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    FormEmployeeComponent,
    IndexEmployeeComponent,
    MenuComponent,
    GenericListComponent,
    InputMarkdownComponent,
    DisplayErrorComponent,
    FormEditTaskComponent,
    MultipleSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
