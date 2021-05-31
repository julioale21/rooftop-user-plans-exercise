"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plan = /** @class */ (function () {
    function Plan() {
        this.startDate = new Date();
    }
    Plan.prototype.getId = function () {
        return this.id;
    };
    Plan.prototype.setId = function (id) {
        this.id = id;
    };
    Plan.prototype.getTitle = function () {
        return this.title;
    };
    Plan.prototype.setTitle = function (title) {
        this.title = title;
    };
    Plan.prototype.getDescription = function () {
        return this.description;
    };
    Plan.prototype.setDescription = function (description) {
        this.description = description;
    };
    Plan.prototype.getCost = function () {
        return this.cost;
    };
    Plan.prototype.setCost = function (cost) {
        this.cost = cost;
    };
    Plan.prototype.getSubcriptionDate = function () {
        return this.startDate;
    };
    Plan.prototype.setSubscriptionDate = function (date) {
        this.startDate = date;
    };
    Plan.prototype.getExpiration = function () {
        return this.expiration;
    };
    Plan.prototype.setExpiration = function (expiration) {
        this.expiration = expiration;
    };
    Plan.prototype.hasAdvertisements = function () {
        return this.advertisements;
    };
    Plan.prototype.setAdvertisements = function (advertisements) {
        this.advertisements = advertisements;
    };
    Plan.prototype.renewPlan = function () {
        this.startDate = new Date();
    };
    return Plan;
}());
exports.default = Plan;
