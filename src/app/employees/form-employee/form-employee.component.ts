import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { employeeCreationDTO, employeeDTO } from '../employees.model';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: employeeDTO;
  @Input()
  nonSelectedTasks: multipleSelectorModel[] = [];
  @Input()
  selectedTasks: multipleSelectorModel[] = [];

  @Output()
  onSaveChanges = new EventEmitter<employeeCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['', {
        validators: [Validators.required, Validators.maxLength(25)]
      }],
      taskIds: ''
    });
  }

  saveChanges(){
    const taskIds = this.selectedTasks.map(value => value.key);
    this.form.get('taskIds').setValue(taskIds)

    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'Pole nazwa jest wymagane';
    }
    if(field.hasError('maxlength')){
      return 'Pole nazwa - dozwolone maksymalnie 25 znaków';
    }
    return '';
  }

}
