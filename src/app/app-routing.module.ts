import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: 'verdict', 
    loadChildren: () => import('./verdict/verdict.module').then(m => m.VerdictModule) 
  },
  { 
    path: 'switcher', 
    loadChildren: () => import('./switcher/switcher.module').then(m => m.SwitcherModule) 
  },
  { 
    path: '', 
    redirectTo: '/verdict', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
