import Axios, { AxiosPromise, AxiosRequestConfig, Method } from "axios";
import * as models from "./models";

export class client {
  public username: string;
  public key: string;
  public baseURL: string;

  constructor(baseURL: string, username?: string, key?: string) {
    this.baseURL = baseURL;
    this.username = username;
    this.key = key;
  }

  /**
   * makes a GET request to the base URL
   *
   * @param resource - resource to GET, can be a path
   * @param params - query params to append to the request URL, in the format {"param": "value"}
   * @returns a promise for the caller to handle responses
   */
  public getResource(resource: string, params?: object): AxiosPromise {
    const url = this.baseURL + "/" + resource;
    return Axios(this.formRequest("GET", url, params));
  }

  /**
   * makes a POST request to the base URL
   *
   * @param resource - resource to POST to, can be a path
   * @param body - body of the request, usually as an object
   * @returns a promise for the caller to handle responses
   */
  public postResource(resource: string, body: any): AxiosPromise {
    const url = this.baseURL + "/" + resource;
    return Axios(this.formRequest("POST", url, undefined, body));
  }
  // routes are below

  /**
   * Gets performance results for a given ID
   *
   * @param id - performance result ID to find
   * @returns a promise that resolves to the requested data
   */
  public perfById(id: string): AxiosPromise<models.APIPerformanceResult> {
    return this.getResource(`perf/${id}`);
  }

  /**
   * Gets performance results for a given task ID
   *
   * @param id - task ID to find
   * @returns a promise that resolves to the requested data
   */
  public perfByTaskId(id: string): AxiosPromise<models.APIPerformanceResult[]> {
    return this.getResource(`perf/task_id/${id}`);
  }

  /**
   * Gets performance results for a given task name
   *
   * @param name - task name to find
   * @returns a promise that resolves to the requested data
   */
  public perfByTaskName(
    name: string,
    project?: string,
    variant?: string,
    tags?: string
  ): AxiosPromise<models.APIPerformanceResult[]> {
    return this.getResource(`perf/task_name/${name}`, {
      project: project,
      variant: variant,
      tags: tags,
    });
  }

  /**
   * Gets logs for a given ID
   *
   * @param id - log ID to find
   * @returns a promise that resolves to the requested data
   */
  public buildlogsById(id: string): AxiosPromise<string> {
    return this.getResource(`buildlogger/${id}`);
  }

  /**
   * Gets log metadata for a given ID
   *
   * @param id - log ID to find
   * @returns a promise that resolves to the requested data
   */
  public buildlogMetadataById(id: string): AxiosPromise<models.APILog> {
    return this.getResource(`buildlogger/${id}/meta`);
  }

  // end routes

  private formRequest(
    method: Method,
    url: string,
    queryParams: object,
    body?: any
  ): AxiosRequestConfig {
    const headers = {
      "Api-User": this.username,
      "Api-Key": this.key,
    };
    const opts: AxiosRequestConfig = {
      headers: headers,
      url: url,
      withCredentials: true,
      method: method,
      params: queryParams,
    };
    if (body) {
      opts.data = body;
    }
    return opts;
  }
}
