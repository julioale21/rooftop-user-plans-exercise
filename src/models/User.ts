import FreePlan from "./FreePlan";
import Plan from "./Plan";

export default class User {
  private id: String;
  private firstName: String;
  private lastName: String;
  private plan: Plan;

  public constructor() {
    this.plan = FreePlan.getInstance();
    this.plan.setSubscriptionDate(new Date());
  }

  public getId(): String {
    return this.id;
  }

  public setId(id: String): void {
    this.id = id;
  }

  public getFirstName(): String {
    return this.firstName;
  }

  public setFirstName(firstName: String): void {
    this.firstName = firstName;
  }

  public getLastName(): String {
    return this.lastName;
  }

  public setLastName(lastName: String): void {
    this.lastName = lastName;
  }

  public getPlan(): Plan {
    return this.plan;
  }

  public subscribePlan(plan: Plan, date?: Date): void {
    this.plan = plan;
    this.plan.setSubscriptionDate(date || new Date());
  }

  public isActivePlan(): Boolean {
    const differenceInTime = new Date().getTime() - this.getPlan().getSubcriptionDate().getTime();
    const differeceInDays = differenceInTime / (1000 * 3600 * 24);
    return this.getPlan().getExpiration() - differeceInDays >= 0;
  }
}
