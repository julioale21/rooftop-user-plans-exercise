import Plan from "./Plan";

class PremiumPlan extends Plan {
  cost: number = 9;
  expiration: number = 30;
  advertisements: boolean = false;

  private static instance: PremiumPlan;

  private constructor() {
    super();
    this.setId("1p");
    this.setTitle("Premium Plan");
    this.setDescription(
      "A premium plan has a duration of 30 days, after that you have to renew the plan. Also, a premium plan has not advertisement",
    );
  }

  public static getInstance() {
    if (!PremiumPlan.instance) {
      PremiumPlan.instance = new PremiumPlan();
    }
    return PremiumPlan.instance;
  }
}

export default PremiumPlan;
