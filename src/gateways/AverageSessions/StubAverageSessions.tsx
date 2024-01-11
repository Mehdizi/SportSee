import { AverageSessions } from "../../types/AverageSessions";
import { UserAverageSessionsGateway } from "./UserAverageSessions.types";

export class StubAverageSessions implements UserAverageSessionsGateway {
  constructor(private stubValue: AverageSessions) {}

  async load(id: number) {
    return Promise.resolve(this.stubValue);
  }
}
