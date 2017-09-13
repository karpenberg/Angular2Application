import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AuthenticationService } from "./services/authentication.service";

const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    {
        path: "",
        component: HomeComponent,
        canActivate: [AuthenticationService],
        children: [
            { path: "", pathMatch: "prefix", redirectTo: "employees", canActivate: [AuthenticationService] },
            {
                path: "employees",
                pathMatch: "prefix",
                component: EmployeesComponent,
                canActivate: [AuthenticationService],

            },
            {
                path: "employee",
                pathMatch: "prefix",
                component: EmployeeComponent,
                canActivate: [AuthenticationService]
            }
        ]
    },
    { path: "**", redirectTo: "", canActivate: [AuthenticationService], pathMatch: "full" }
];

export const routing = RouterModule.forRoot(appRoutes);