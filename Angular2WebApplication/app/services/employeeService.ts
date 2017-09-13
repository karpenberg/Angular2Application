import { Injectable } from "@angular/core";
import { BaseApiService } from "./baseApiService"
import { Employee } from "../models/employee";
import { Http } from '@angular/http';
import { NotificationService } from "./notification.service";

@Injectable()
export class EmployeeService extends BaseApiService<Employee> {
    controllerName(): string { return "Employees"; }

    public constructor(http: Http, notificationService: NotificationService) {
        super(http, notificationService);
    }

    current: Employee;

}