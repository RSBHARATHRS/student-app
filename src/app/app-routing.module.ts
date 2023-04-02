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
    path: 'student-details',
    loadChildren: () => import('./pages/student-details/student-details.module').then(m => m.StudentDetailsModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./pages/student-list/student-list.module').then(m => m.StudentListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
