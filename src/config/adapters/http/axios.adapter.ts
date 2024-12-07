import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';

interface Options {
  baseURL: string;
  params: Record<string, string>;
}

export class AxosAdapter implements HttpAdapter {
  private axiosIntance: AxiosInstance;

  constructor(options: Options) {
    this.axiosIntance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
    });
  }
  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const {data} = await this.axiosIntance.get<T>(url, options);
      return data;
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
