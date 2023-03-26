import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsDataComponent } from './all-students-data.component';

const routes: Routes = [{ path: '', component: AllStudentsDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllStudentsDataRoutingModule { }
