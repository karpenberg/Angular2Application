import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { GetListResponse } from "../models/employee";
import { NotificationService, NotificationTypes } from "./notification.service";

export abstract class BaseApiService<T> {
    public constructor(protected http: Http, private notificationService: NotificationService) {
    }

    protected baseApiAdress: string = "http://localhost:58251/api/";

    abstract controllerName(): string;

    getList(pageNumber: number, itemsPerPage: number): Observable<GetListResponse<T>> {
        const path = this.baseApiAdress + this.controllerName() + "/" + itemsPerPage + "/" + pageNumber;
        return this.http.get(path)
            .map((response: Response) => response.json())
            .catch((error: any) => {
                this.notificationService.showNotification(NotificationTypes.Error, "Request failed", error);
                return Observable.throw(error);
            });            ;
    }
}