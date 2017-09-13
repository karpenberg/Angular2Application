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
var angular2_toaster_1 = require("angular2-toaster");
var NotificationService = (function () {
    function NotificationService(toasterService) {
        this.config1 = new angular2_toaster_1.ToasterConfig({
            positionClass: 'toast-top-right'
        });
        this.toasterService = toasterService;
    }
    NotificationService.prototype.showNotification = function (noificationType, title, message) {
        var type = "";
        switch (noificationType) {
            case NotificationTypes.Error:
                type = "error";
                break;
            case NotificationTypes.Success:
                type = "success";
                break;
            default:
        }
        var toast = {
            type: type,
            title: title,
            body: message,
            showCloseButton: false
        };
        this.toasterService.pop(toast);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angular2_toaster_1.ToasterService])
], NotificationService);
exports.NotificationService = NotificationService;
var NotificationTypes;
(function (NotificationTypes) {
    NotificationTypes[NotificationTypes["Success"] = 0] = "Success";
    NotificationTypes[NotificationTypes["Error"] = 1] = "Error";
})(NotificationTypes = exports.NotificationTypes || (exports.NotificationTypes = {}));
//# sourceMappingURL=notification.service.js.map