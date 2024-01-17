import { Performances } from "../../types/Performances";

export interface UserPerformancesGateway {
  load: (id: number) => Promise<Performances>
}
