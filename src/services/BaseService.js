import axios from "axios";
import { message } from "ant-design-vue";

class BaseService {
  constructor() {
    this.http = axios.create({
      baseURL: "https://covid19.mathdro.id/api/"
    });

    this.http.interceptors.response.use(
      success => {
        return success;
      },
      error => {
        console.log(error);
        message.error("Country data not found!");
      }
    );
  }

  async get(url) {
    return this.http.get(url);
  }

  async post(url, data, config) {
    return this.http.post(url, data, config);
  }

  async put(url, data, config) {
    return this.http.put(url, data, config);
  }

  async delete(url, config) {
    return this.http.delete(url, config);
  }
}

const baseService = new BaseService();

export { baseService };
