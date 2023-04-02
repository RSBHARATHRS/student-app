import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFormRoutingModule } from './student-form-routing.module';
import { StudentFormComponent } from './student-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    StudentFormRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentFormModule { }
