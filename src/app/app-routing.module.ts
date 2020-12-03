import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedListComponent } from './detailed-list/detailed-list.component';
import { AllListsComponent } from './all-lists/all-lists.component';


const routes: Routes = [
  {path: "index", component: AllListsComponent, pathMatch: 'full'},
  {path: ":name", component: DetailedListComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
