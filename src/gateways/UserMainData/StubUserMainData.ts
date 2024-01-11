import { UserMainData, UserMainDataGateway } from "./UserMainDataGateway.types"

export class StubUserMainData implements UserMainDataGateway {
  constructor(private stubValue: UserMainData) { }

  async load(id: number) {
    return await Promise.resolve(this.stubValue)
  }
}