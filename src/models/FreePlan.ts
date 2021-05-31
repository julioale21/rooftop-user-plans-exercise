import Plan from "./Plan";

class FreePlan extends Plan {
  cost: number = 0;
  expiration: number = 15;
  advertisements: boolean = true;
  private static instance: FreePlan;

  private constructor() {
    super();
    this.setId("1f");
    this.setTitle("Free Plan");
    this.setDescription(
      "A free plan has a duration of 15 days, after that you have to select a basic or premium plan.  Also, a free plan has advertisement",
    );
  }

  public static getInstance() {
    if (!FreePlan.instance) {
      FreePlan.instance = new FreePlan();
    }
    return FreePlan.instance;
  }
}

export default FreePlan;
