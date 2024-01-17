import { Performances } from "../../types/Performances";
import { UserPerformancesGateway } from "./UserPerformances.types";

export class StubPerformances implements UserPerformancesGateway {
  constructor(private stubValue: Performances) { }
  async load(id: number) {
    return await Promise.resolve(this.stubValue)
  }
}