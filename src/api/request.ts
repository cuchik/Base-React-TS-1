import { AxiosInstance, default as BaseAxios } from 'axios';
import get from 'lodash/get';
import { store } from 'src/store';

class RequestClass {
  axios: AxiosInstance;

  constructor() {
    this.axios = BaseAxios.create({ timeout: 600000 });
    this.axios.defaults.headers.common = {
      'X-Requested-With': 'XMLHttpRequest',
    };
    this.axios.defaults.withCredentials = true;
  }

  async call(config: any) {
    try {
      const serverBaseUrl = process.env.REACT_APP_API_BASE_URL;
      let headers: { [key: string]: string } = {
        Accept: 'application/json',
        'Content-Type': config?.multipart
          ? 'multipart/form-data'
          : 'application/json',
      };
      const storeData = store.getState();
      const storedAccessToken = get(storeData, 'auth.accessToken', '');
      if (storedAccessToken) {
        headers = {
          ...headers,
          Authorization: `Bearer ${storedAccessToken}`,
        };
      }
      const res = await this.axios.request({
        baseURL: serverBaseUrl,
        headers,
        ...config,
      });
      const apiStatus = res.data?.status;
      return { data: res.data, status: apiStatus === false ? 0 : 1 };
    } catch (error: any) {
      const errorStatus = get(error, 'response.status', null);
      const data = get(error, 'response.data', null);
      return {
        status: 0,
        errorStatus,
        message: error?.message,
        data,
      };
    }
  }
}

const Request = new RequestClass();
export { Request };
