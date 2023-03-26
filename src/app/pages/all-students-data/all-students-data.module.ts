import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllStudentsDataRoutingModule } from './all-students-data-routing.module';
import { AllStudentsDataComponent } from './all-students-data.component';


@NgModule({
  declarations: [
    AllStudentsDataComponent
  ],
  imports: [
    CommonModule,
    AllStudentsDataRoutingModule
  ]
})
export class AllStudentsDataModule { }
