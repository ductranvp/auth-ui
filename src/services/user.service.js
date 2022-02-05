import { AxiosService } from "./axios.service.js";

class UserService extends AxiosService {
  async getCurrentUserInfo() {
    const { data } = await this.axios.get("/users/current");
    return data;
  }
}

export const userService = new UserService();
