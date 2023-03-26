import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'student-form',
    loadChildren: () => import('./pages/student-form/student-form.module').then(m => m.StudentFormModule)
  },
  {
    path: 'all-students-data',
    loadChildren: () => import('./pages/all-students-data/all-students-data.module').then(m => m.AllStudentsDataModule)
  },
  {
    path: 'student-details',
    loadChildren: () => import('./pages/student-details/student-details.module').then(m => m.StudentDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
