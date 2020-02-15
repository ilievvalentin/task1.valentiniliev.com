import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HyperlinksComponent} from './hyperlinks/hyperlinks.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'hyperlinks', component: HyperlinksComponent},
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
