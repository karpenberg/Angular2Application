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
var authentication_service_1 = require("../services/authentication.service");
var notification_service_1 = require("../services/notification.service");
var LoginComponent = (function () {
    function LoginComponent(notificationService, authService) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.user = new authentication_service_1.User("", "");
        this.errorMsg = "";
    }
    LoginComponent.prototype.login = function () {
        if (!this.authService.login(this.user)) {
            this.notificationService.showNotification(notification_service_1.NotificationTypes.Error, "Login failed", "Email or password are incorrect");
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login-form",
        templateUrl: "./app/login/login.component.html"
    }),
    __metadata("design:paramtypes", [notification_service_1.NotificationService, authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map