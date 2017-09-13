import {Component} from "@angular/core";
import { AuthenticationService, User } from "../services/authentication.service";
import { NotificationService, NotificationTypes } from "../services/notification.service";

@Component({
    selector: "login-form",
    templateUrl: "./app/login/login.component.html"
})
 
export class LoginComponent {
 
    user = new User("","");
    errorMsg = "";

    constructor(private readonly notificationService: NotificationService, private readonly authService: AuthenticationService) {
    }

    login() {
        if (!this.authService.login(this.user)) {
            this.notificationService.showNotification(NotificationTypes.Error, "Login failed", "Email or password are incorrect");
        }
    }
}