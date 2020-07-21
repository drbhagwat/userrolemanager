import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateComponent} from './date/date.component'

const routes: Routes = [
  {path: 'home', component: DateComponent},
  {path: 'login', component: DateComponent},
  {path: 'about', component: DateComponent},
  {path: 'signup', component: DateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
