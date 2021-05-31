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
var BasicPlan = /** @class */ (function (_super) {
    __extends(BasicPlan, _super);
    function BasicPlan() {
        var _this = _super.call(this) || this;
        _this.cost = 3;
        _this.expiration = 30;
        _this.advertisements = false;
        _this.setId("1b");
        _this.setTitle("Basic Plan");
        _this.setDescription("A basic plan has a duration of 30 days, after that you have to renew the plan. Also, a basic plan has not advertisement");
        return _this;
    }
    BasicPlan.getInstance = function () {
        if (!BasicPlan.instance) {
            BasicPlan.instance = new BasicPlan();
        }
        return BasicPlan.instance;
    };
    return BasicPlan;
}(Plan_1.default));
exports.default = BasicPlan;
