"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var notification_service_1 = require("./notification.service");
var BaseApiService = (function () {
    function BaseApiService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
        this.baseApiAdress = "http://localhost:58251/api/";
    }
    BaseApiService.prototype.getList = function (pageNumber, itemsPerPage) {
        var _this = this;
        var path = this.baseApiAdress + this.controllerName() + "/" + itemsPerPage + "/" + pageNumber;
        return this.http.get(path)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.notificationService.showNotification(notification_service_1.NotificationTypes.Error, "Request failed", error);
            return rxjs_1.Observable.throw(error);
        });
        ;
    };
    return BaseApiService;
}());
exports.BaseApiService = BaseApiService;
//# sourceMappingURL=baseApiService.js.map