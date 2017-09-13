"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var employees_component_1 = require("./employees/employees.component");
var employee_component_1 = require("./employee/employee.component");
var authentication_service_1 = require("./services/authentication.service");
var appRoutes = [
    { path: "login", component: login_component_1.LoginComponent },
    {
        path: "",
        component: home_component_1.HomeComponent,
        canActivate: [authentication_service_1.AuthenticationService],
        children: [
            { path: "", pathMatch: "prefix", redirectTo: "employees", canActivate: [authentication_service_1.AuthenticationService] },
            {
                path: "employees",
                pathMatch: "prefix",
                component: employees_component_1.EmployeesComponent,
                canActivate: [authentication_service_1.AuthenticationService],
            },
            {
                path: "employee",
                pathMatch: "prefix",
                component: employee_component_1.EmployeeComponent,
                canActivate: [authentication_service_1.AuthenticationService]
            }
        ]
    },
    { path: "**", redirectTo: "", canActivate: [authentication_service_1.AuthenticationService], pathMatch: "full" }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map