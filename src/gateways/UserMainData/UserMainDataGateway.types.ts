import { MacroCount } from "../../types/HealthInfos"
import { UserInfos } from "../../types/UserInfos"
import { ScoreInfos } from "../../types/ScoreInfos"
import { Id } from "../../types/Id"


export type UserMainData = Id & UserInfos & MacroCount & ScoreInfos

export interface UserMainDataGateway {
  load: (id: number) => Promise<UserMainData>
}

