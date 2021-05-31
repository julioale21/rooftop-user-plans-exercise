"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Plan_1 = __importDefault(require("./Plan"));
var PremiumPlan = /** @class */ (function (_super) {
    __extends(PremiumPlan, _super);
    function PremiumPlan() {
        var _this = _super.call(this) || this;
        _this.cost = 9;
        _this.expiration = 30;
        _this.advertisements = false;
        _this.setId("1p");
        _this.setTitle("Premium Plan");
        _this.setDescription("A premium plan has a duration of 30 days, after that you have to renew the plan. Also, a premium plan has not advertisement");
        return _this;
    }
    PremiumPlan.getInstance = function () {
        if (!PremiumPlan.instance) {
            PremiumPlan.instance = new PremiumPlan();
        }
        return PremiumPlan.instance;
    };
    return PremiumPlan;
}(Plan_1.default));
exports.default = PremiumPlan;
