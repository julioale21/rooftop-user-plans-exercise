import BasicPlan from "./src/models/BasicPlan";
import FreePlan from "./src/models/FreePlan";
import PremiumPlan from "./src/models/PremiumPlan";
import User from "./src/models/User";

const user = new User();
user.setId("1");
user.setFirstName("Julio");
user.setLastName("Romero");

console.log(user);

const free = FreePlan.getInstance();
const basic = BasicPlan.getInstance();
const premium = PremiumPlan.getInstance();

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
