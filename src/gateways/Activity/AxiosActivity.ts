
import axios from "axios";
import { UserActivityGateway } from "./UserActivity.types";

const baseUrl = process.env.REACT_APP_USER_MAIN_DATA_BASEURL

export class AxiosActivity implements UserActivityGateway {
  async load(id: number) {
    return (await axios.get(`${baseUrl}/user/${id}/activity`)).data.data.sessions
  }
}