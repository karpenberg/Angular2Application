import { Injectable } from "@angular/core";
import { ToasterService, ToasterConfig, Toast } from "angular2-toaster";

@Injectable()
export class NotificationService {

    private toasterService: ToasterService;

    public config1: ToasterConfig = new ToasterConfig({
        positionClass: 'toast-top-right'
    });

    constructor(toasterService: ToasterService) {
        this.toasterService = toasterService;
    }

    showNotification(noificationType: NotificationTypes, title: string, message: string) {
        let type = "";
        switch (noificationType) {
            case NotificationTypes.Error:
                type = "error";
                break;
            case NotificationTypes.Success:
                type = "success";
                break;
        default:
        }
        const toast: Toast = {
            type: type,
            title: title,
            body: message,
            showCloseButton: false
        };

        this.toasterService.pop(toast);
    }
}

export enum NotificationTypes {
    Success,
    Error
}
