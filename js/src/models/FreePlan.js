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
var FreePlan = /** @class */ (function (_super) {
    __extends(FreePlan, _super);
    function FreePlan() {
        var _this = _super.call(this) || this;
        _this.cost = 0;
        _this.expiration = 15;
        _this.advertisements = true;
        _this.setId("1f");
        _this.setTitle("Free Plan");
        _this.setDescription("A free plan has a duration of 15 days, after that you have to select a basic or premium plan.  Also, a free plan has advertisement");
        return _this;
    }
    FreePlan.getInstance = function () {
        if (!FreePlan.instance) {
            FreePlan.instance = new FreePlan();
        }
        return FreePlan.instance;
    };
    return FreePlan;
}(Plan_1.default));
exports.default = FreePlan;
