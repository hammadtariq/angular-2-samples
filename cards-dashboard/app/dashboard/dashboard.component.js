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
var core_1 = require('@angular/core');
var dashboard_service_1 = require('./shared/dashboard.service');
var DashboardComponent = (function () {
    function DashboardComponent(dashService) {
        this.dashService = dashService;
        this.cards = { inactive: [], active: [], failed: [], delayed: [], complete: [] };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLogs();
        setInterval(function () {
            _this.getLogs();
        }, 10000);
    };
    DashboardComponent.prototype.getLogs = function () {
        var _this = this;
        this.dashService.getLogs()
            .subscribe(function (res) { return _this.cards = res; }, function () {
            console.log("ERROR 503: Server is not responding right now.");
        }, function () { return console.log("Cards: ", _this.cards); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map