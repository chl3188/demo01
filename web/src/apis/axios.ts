import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

// interceptor config
function setInterceptors(instance: any) {
  // request interceptor
  instance.interceptors.request.use(
    (config: any) => {
      config.headers.Authorization = `Bearer `;
      return config;
    },
    (error: any) => Promise.reject(error)
  );
  // response interceptor
  instance.interceptors.response.use(
    (response: any) => response,
    (error: any) => Promise.reject
  );
  return instance;
}

// exios config
export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: "http://127.0.0.1",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};

// set interceptor
const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  const createdInstance = axios.create(config);
  const interceptorInstance = setInterceptors(createdInstance);
  return interceptorInstance;
};

const axiosInstance = initialization(axiosRequestConfiguration);

export default axiosInstance;

export const getApi = async (url: string, params?: any) => {
  try {
    const res = await axiosInstance({
      url,
      method: "GET",
      params: params,
    });

    return res.data;
  } catch (err) {
    return errorCheck(err);
  }
};

export const postApi = async (url: string, data?: any) => {
  try {
    const res = await axiosInstance({
      url,
      method: "POST",
      data,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    return errorCheck(err);
  }
};

export const putApi = async (url: string, data?: any) => {
  try {
    const res = await axiosInstance({
      url,
      method: "PUT",
      data,
    });

    return res.data;
  } catch (err) {
    return errorCheck(err);
  }
};

export const deleteApi = async (url: string, params?: any) => {
  try {
    const res = await axiosInstance({
      url,
      method: "DELETE",
      params,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    return errorCheck(err);
  }
};

const errorCheck = async (err: any) => {
  if (!err || !err.response) {
    return null;
  }

  if (
    err.response.status &&
    (err.response.status === 403 || err.response.status === 401)
  ) {
    // await TokenStorage.clear();
    return err.response.data;
  }

  return err.response.data;
};
