import { Component, OnInit } from '@angular/core';
import { Employee } from "../models/employee";
import { Router } from "@angular/router";
import { EmployeeService } from "../services/employeeService";

@Component({
    selector: "employee-form",
    templateUrl: "./app/employee/employee.component.html",
    styleUrls: ["./app/employee/employee.component.css"]
})

export class EmployeeComponent implements OnInit {
    constructor(private readonly router: Router, private readonly employeesService: EmployeeService) {
    }
    
    employee: Employee;

    ngOnInit() {
        this.employee = this.employeesService.current;
    }
}