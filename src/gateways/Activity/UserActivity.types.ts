import { Activity } from "../../types/Activity";

export interface UserActivityGateway {
  load: (id: number) => Promise<Activity>
}