import axios from "axios"
import { UserMainData, UserMainDataGateway } from "./UserMainDataGateway.types"

const baseUrl = process.env.REACT_APP_USER_MAIN_DATA_BASEURL

export class AxiosUserMainData implements UserMainDataGateway {
  async load(id: number) {
    return this.formatData((await (axios.get(`${baseUrl}/user/${id}`))).data.data)
  }

  private formatData(data: any): UserMainData {
    const { id, userInfos, keyData } = data
    const todayScore = data.todayScore || data.score
    const { firstName, lastName, age } = userInfos
    const { calorieCount, carbohydrateCount, lipidCount, proteinCount } = keyData
    return {
      id,
      firstName,
      lastName,
      age,
      todayScore,
      macroCount: {
        lipid: lipidCount,
        calorie: calorieCount,
        carbohydrate: carbohydrateCount,
        protein: proteinCount
      }
    }
  }
}