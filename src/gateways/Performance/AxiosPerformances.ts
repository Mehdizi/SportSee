import axios from "axios";
import { UserPerformancesGateway } from "./UserPerformances.types";

const baseUrl = process.env.REACT_APP_USER_MAIN_DATA_BASEURL

export class AxiosPerformances implements UserPerformancesGateway {
  async load(id: number) {
    const performanceDatas = (await axios.get(`${baseUrl}/user/${id}/performance`)).data.data
    return {
      kind: performanceDatas.kind,
      data: performanceDatas.data
    }
  }
}