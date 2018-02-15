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
var core_1 = require("@angular/core");
var auth_1 = require("angularfire2/auth");
/**
 * Authentication service
 *
 */
var AuthenticationService = (function () {
    /**
     * Constructor
     *
     * @param {AngularFireAuth} angularFireAuth provides the functionality related to authentication
     */
    function AuthenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthenticationService.prototype.login = function (email, password) {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthenticationService.prototype.signup = function (email, password) {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthenticationService.prototype.signout = function (email, password) {
        this.angularFireAuth.auth.signOut();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_1.AngularFireAuth])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map