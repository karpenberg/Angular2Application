import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { ToasterModule } from 'angular2-toaster';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from "./services/authentication.service";
import { FormsModule } from '@angular/forms';
import { NotificationService } from "./services/notification.service";
import { EmployeeService } from "./services/employeeService";
import { PagerService } from './services/pageService';
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeComponent } from "./employee/employee.component";

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        routing,
        ToasterModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        EmployeesComponent,
        EmployeeComponent
    ],
    providers: [
        AuthenticationService,
        NotificationService,
        EmployeeService,
        PagerService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
