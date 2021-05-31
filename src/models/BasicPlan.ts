import Plan from "./Plan";

class BasicPlan extends Plan {
  cost: number = 3;
  expiration: number = 30;
  advertisements: boolean = false;

  private static instance: BasicPlan;

  private constructor() {
    super();
    this.setId("1b");
    this.setTitle("Basic Plan");
    this.setDescription(
      "A basic plan has a duration of 30 days, after that you have to renew the plan. Also, a basic plan has not advertisement",
    );
  }

  public static getInstance() {
    if (!BasicPlan.instance) {
      BasicPlan.instance = new BasicPlan();
    }
    return BasicPlan.instance;
  }
}

export default BasicPlan;
