import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { taskDTO } from '../tasks.model';

@Component({
  selector: 'app-form-edit-task',
  templateUrl: './form-edit-task.component.html',
  styleUrls: ['./form-edit-task.component.css']
})
export class FormEditTaskComponent implements OnInit {

  minDate = new Date();

  form: any;

  @Input()
  model!: taskDTO;

  @Output()
  onSaveChanges: EventEmitter<taskDTO> = new EventEmitter<taskDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['', { validators: [Validators.required, Validators.maxLength(20)]}],
      dateToFinished: ['', { validators: [Validators.required]}],
      description: ['', { validators: [Validators.required, Validators.maxLength(250)]}],
      isCompleted: false
    });

    console.log(this.model);

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  onChangesMarkdown(content: any){
    this.form.get('description').setValue(content);
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'Pole nazwa jest wymagane';
    }
    if(field.hasError('maxlength')){
      return 'Pole nazwa - dozwolone maksymalnie 20 znaków';
    }
    return '';
  }
  getErrorMessageFieldDateToFinished(){
    const field = this.form.get('dateToFinished');
    if(field.hasError('required')){
      return 'Proszę wybrać datę';
    }
    return '';
  }
  getErrorMessageFieldDescription(){
    const field = this.form.get('description');
    if(field.hasError('required')){
      return 'Pole opis jest wymagane';
    }
    if(field.hasError('maxlength')){
      return 'Pole opis - dozwolone maksymalnie 250 znaków'
    }
    return '';
  }

}
