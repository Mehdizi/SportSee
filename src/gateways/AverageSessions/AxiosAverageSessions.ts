import axios from "axios";
import { UserAverageSessionsGateway } from "./UserAverageSessions.types";

const baseUrl = process.env.REACT_APP_USER_MAIN_DATA_BASEURL

export class AxiosUserAverageSessions implements UserAverageSessionsGateway {


  async load(id: number) {
    // stocker la réponse API dans une variable et return la variable 
    return (await (axios.get(`${baseUrl}/user/${id}/average-sessions`))).data.data.sessions
  }
}