"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var angular2_toaster_1 = require("angular2-toaster");
var login_component_1 = require("./login/login.component");
var http_1 = require("@angular/http");
var home_component_1 = require("./home/home.component");
var authentication_service_1 = require("./services/authentication.service");
var forms_1 = require("@angular/forms");
var notification_service_1 = require("./services/notification.service");
var employeeService_1 = require("./services/employeeService");
var pageService_1 = require("./services/pageService");
var employees_component_1 = require("./employees/employees.component");
var employee_component_1 = require("./employee/employee.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.routing,
            angular2_toaster_1.ToasterModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent,
            employees_component_1.EmployeesComponent,
            employee_component_1.EmployeeComponent
        ],
        providers: [
            authentication_service_1.AuthenticationService,
            notification_service_1.NotificationService,
            employeeService_1.EmployeeService,
            pageService_1.PagerService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map