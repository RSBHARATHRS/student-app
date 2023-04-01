import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: StudentFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class StudentFormRoutingModule { }
