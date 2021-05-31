"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var FreePlan_1 = __importDefault(require("./FreePlan"));
var User = /** @class */ (function () {
  function User() {
    this.plan = FreePlan_1.default.getInstance();
    this.plan.setSubscriptionDate(new Date());
  }
  User.prototype.getId = function () {
    return this.id;
  };
  User.prototype.setId = function (id) {
    this.id = id;
  };
  User.prototype.getFirstName = function () {
    return this.firstName;
  };
  User.prototype.setFirstName = function (firstName) {
    this.firstName = firstName;
  };
  User.prototype.getLastName = function () {
    return this.lastName;
  };
  User.prototype.setLastName = function (lastName) {
    this.lastName = lastName;
  };
  User.prototype.getPlan = function () {
    return this.plan;
  };
  User.prototype.subscribePlan = function (plan, date) {
    this.plan = plan;
    this.plan.setSubscriptionDate(date || new Date());
  };
  User.prototype.isActivePlan = function () {
    var differenceInTime = new Date().getTime() - this.getPlan().getSubcriptionDate().getTime();
    var differeceInDays = differenceInTime / (1000 * 3600 * 24);
    return this.getPlan().getExpiration() - differeceInDays >= 0;
  };
  return User;
})();
exports.default = User;
