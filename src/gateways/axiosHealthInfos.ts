import axios from "axios";
import { UserHealthGateway } from "./stubHealthInfosDatas";
export class AxiosHealthInfosGateway implements UserHealthGateway {
  async load(id: number) {
    return (await axios.get(`http://localhost:3000/user/${id}`)).data.data.keyData
  }
}