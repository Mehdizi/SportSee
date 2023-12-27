import { UserAverageSessionsGateway } from "./stubAverageSessionsDatas";
import axios from "axios";
export class AxiosAverageSessionsGateway implements UserAverageSessionsGateway {
  async load(id: number) {
    return (await axios.get(`http://localhost:3000/user/${id}/average-sessions`)).data
  }
}