"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyNavComponent = (function () {
    function MyNavComponent() {
        this.navTags = ['Home', 'Posts', 'About', 'Contacts'];
    }
    return MyNavComponent;
}());
MyNavComponent = __decorate([
    core_1.Component({
        selector: 'my-nav',
        templateUrl: './my-nav.component.html',
        styleUrls: ['./my-nav.component.scss']
    })
], MyNavComponent);
exports.MyNavComponent = MyNavComponent;
//# sourceMappingURL=my-nav.component.js.map