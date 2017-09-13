import { Component, OnInit } from '@angular/core';
import { PagerService } from "../services/pageService";
import { EmployeeService } from "../services/employeeService";
import { Employee } from "../models/employee";
import { Router } from "@angular/router";

@Component({
    selector: 'employees-form',
    templateUrl: "./app/employees/employees.component.html",
    styleUrls: ["./app/employees/employees.component.css"]
})

export class EmployeesComponent implements OnInit {
    constructor(private readonly employeesService: EmployeeService, private readonly pagerService: PagerService, private readonly router: Router) { }

    // array of all items to be paged
    employees: Employee[];
    totalCount: number;
    // pager object
    pager: any = { totalPages: 1 };

    // paged items
    pagedItems: any[];

    openEmployeePage(employee: Employee) {
        this.employeesService.current = employee;
        this.router.navigate(["/employee"]);
    }


    getEmployees(pageNumber: number) {
        this.employeesService.getList(pageNumber, 8).subscribe(data => {
            this.employees = data.items;
            this.totalCount = data.totalCount;
            this.pager = this.pagerService.getPager(this.totalCount, pageNumber, 8);
        });
    }


    ngOnInit() {
        this.setPage(1);
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.getEmployees(page);
    }


}