import User from "./User";

abstract class Plan {
  private id: string;
  private title: string;
  private description: string;
  private startDate: Date = new Date();
  abstract cost: number;
  abstract expiration: number;
  abstract advertisements: boolean;

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getCost(): number {
    return this.cost;
  }

  public setCost(cost: number): void {
    this.cost = cost;
  }

  public getSubcriptionDate(): Date {
    return this.startDate;
  }

  public setSubscriptionDate(date: Date): void {
    this.startDate = date;
  }

  public getExpiration(): number {
    return this.expiration;
  }

  public setExpiration(expiration: number): void {
    this.expiration = expiration;
  }

  public hasAdvertisements(): boolean {
    return this.advertisements;
  }

  public setAdvertisements(advertisements: boolean): void {
    this.advertisements = advertisements;
  }

  public renewPlan(): void {
    this.startDate = new Date();
  }
}

export default Plan;
