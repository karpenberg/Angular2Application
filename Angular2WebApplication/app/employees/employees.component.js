"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pageService_1 = require("../services/pageService");
var employeeService_1 = require("../services/employeeService");
var router_1 = require("@angular/router");
var EmployeesComponent = (function () {
    function EmployeesComponent(employeesService, pagerService, router) {
        this.employeesService = employeesService;
        this.pagerService = pagerService;
        this.router = router;
        // pager object
        this.pager = { totalPages: 1 };
    }
    EmployeesComponent.prototype.openEmployeePage = function (employee) {
        this.employeesService.current = employee;
        this.router.navigate(["/employee"]);
    };
    EmployeesComponent.prototype.getEmployees = function (pageNumber) {
        var _this = this;
        this.employeesService.getList(pageNumber, 8).subscribe(function (data) {
            _this.employees = data.items;
            _this.totalCount = data.totalCount;
            _this.pager = _this.pagerService.getPager(_this.totalCount, pageNumber, 8);
        });
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        this.setPage(1);
    };
    EmployeesComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.getEmployees(page);
    };
    return EmployeesComponent;
}());
EmployeesComponent = __decorate([
    core_1.Component({
        selector: 'employees-form',
        templateUrl: "./app/employees/employees.component.html",
        styleUrls: ["./app/employees/employees.component.css"]
    }),
    __metadata("design:paramtypes", [employeeService_1.EmployeeService, pageService_1.PagerService, router_1.Router])
], EmployeesComponent);
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map