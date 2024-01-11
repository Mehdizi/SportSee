import { Activity } from "../../types/Activity";
import { UserActivityGateway } from "./UserActivity.types";

export class StubActivity implements UserActivityGateway {
  constructor(private stubValue: Activity) { }

  async load(id: number) {
    return await Promise.resolve(this.stubValue)
  }
}