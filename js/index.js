"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var BasicPlan_1 = __importDefault(require("./src/models/BasicPlan"));
var FreePlan_1 = __importDefault(require("./src/models/FreePlan"));
var PremiumPlan_1 = __importDefault(require("./src/models/PremiumPlan"));
var User_1 = __importDefault(require("./src/models/User"));
var user = new User_1.default();
user.setId("1");
user.setFirstName("Julio");
user.setLastName("Romero");
console.log(user);
var free = FreePlan_1.default.getInstance();
var basic = BasicPlan_1.default.getInstance();
var premium = PremiumPlan_1.default.getInstance();
user.subscribePlan(basic, new Date(2021, 3, 11));
console.log(user);
console.log("has advertisement: ", user.getPlan().hasAdvertisements());
console.log("is active plan:", user.isActivePlan());
if (!user.isActivePlan()) {
  user.getPlan().renewPlan();
}
console.log("is active plan:", user.isActivePlan());
user.subscribePlan(premium);
console.log(user);
user.subscribePlan(free);
console.log(user);
