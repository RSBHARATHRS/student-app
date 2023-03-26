import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFormRoutingModule } from './student-form-routing.module';
import { StudentFormComponent } from './student-form.component';


@NgModule({
  declarations: [
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    StudentFormRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentFormModule { }
