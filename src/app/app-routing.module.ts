import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    children: [
      {
        path: '',
        loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
      },
      {
        path: ':studentId',
        loadChildren: () => import('./students/student-detail/student-detail.module').then( m => m.StudentDetailPageModule)
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
