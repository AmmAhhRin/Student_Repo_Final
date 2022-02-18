import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component'
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ObjectiveComponent } from './objective/objective.component';
import { BuiltByComponent } from './built-by/built-by.component';
import { StudentPfComponent } from './student-pf/student-pf.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'home', component:HomepageComponent
  },
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'form', component:StudentDashboardComponent},
  {path:'objective', component:ObjectiveComponent},
  {path:'built', component:BuiltByComponent},
  {path: 'studentpf', component:StudentPfComponent},
  {path: 'login', component:LoginComponent}


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
