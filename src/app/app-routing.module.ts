import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HyperlinksComponent} from './hyperlinks/hyperlinks.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'hyperlinks', component: HyperlinksComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
