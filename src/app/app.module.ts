import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ObjectiveComponent } from './objective/objective.component';
import { BuiltByComponent } from './built-by/built-by.component';
import { RouterModule } from '@angular/router';
import { StudentPfComponent } from './student-pf/student-pf.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    HomepageComponent,
    ObjectiveComponent,
    BuiltByComponent,
    StudentPfComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
