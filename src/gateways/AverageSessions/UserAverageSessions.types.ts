import { AverageSessions } from "../../types/AverageSessions";

export interface UserAverageSessionsGateway {
  load: (id: number) => Promise<AverageSessions>
}


