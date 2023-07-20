import { IHttpRequest } from "@huaweicloud/huaweicloud-sdk-core/http/IHttpRequest";
import {
  RequiredError,
} from "@huaweicloud/huaweicloud-sdk-core/auth/AKSKSigner";
import {
  ClientOptions,
  DefaultHttpClient,
} from "@huaweicloud/huaweicloud-sdk-core/http/DefaultHttpClient";
import { HttpRequestBuilder } from "@huaweicloud/huaweicloud-sdk-core/http/IHttpRequestBuilder";
import { ICredential } from "@huaweicloud/huaweicloud-sdk-core/auth/ICredential";

export class MeetingCredentials implements ICredential {
  token?: string;
  userName?: string;
  userPassword?: string;
  lastTokenDate: number = 0;
  EXPIRE_HOUR_HALF: number = 12;
  CLIENT_TYPE_API?: number = 72;
  public getAk: () => string | undefined;
  public getSk: () => string | undefined;
  public processAuthParams: () => Promise<ICredential>;

  public async processAuthRequest(
    httpRequest: IHttpRequest
  ): Promise<IHttpRequest> {
    if (!this.userName || !this.userPassword) {
      throw new RequiredError("Input your user name and password");
    }

    const builder = new HttpRequestBuilder();
    const exp = new Date().getTime() - this.lastTokenDate;
    if (!this.token || exp > this.EXPIRE_HOUR_HALF * 60 * 60) {
      const newToken = await this.createToken(httpRequest);
      builder.addHeaders("X-Access-Token", newToken);
    } else {
      builder.addHeaders("X-Access-Token", this.token);
    }

    builder.withUrl(httpRequest.url);
    builder.withEndpoint(`${httpRequest.endpoint}${httpRequest.url}`);
    builder.addAllHeaders(httpRequest.headers);

    return Object.assign(httpRequest, builder.build());
  }

  private async createToken(httpRequest: IHttpRequest): Promise<string> {
    const request = {
      url: "/v1/usg/acs/auth/account",
      method: "POST",
      data: {
        account: this.userName,
        clientType: this.CLIENT_TYPE_API,
      },
      headers: {
        Authorization:
          "Basic " + this.base64encode(this.userName + ":" + this.userPassword),
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    const endpoints = [httpRequest.endpoint];
    const clientOptions: ClientOptions = {};
    const httpClient = new DefaultHttpClient(clientOptions, endpoints);
    const response = await httpClient.sendRequest(request);

    this.token = response?.data?.accessToken || "";
    this.lastTokenDate = new Date().getTime();
    if (!this.token) {
      throw new Error("createToken: token is undefined");
    }

    return this.token;
  }

  public getUserName(): string | undefined {
    return this.userName;
  }

  public setUserName(userName?: string): void {
    this.userName = userName;
  }

  public withUserName(userName?: string): MeetingCredentials {
    this.userName = userName;
    return this;
  }

  public getUserPassword(): string | undefined {
    return this.userPassword;
  }

  public setUserPassword(userPassword?: string): void {
    this.userPassword = userPassword;
  }

  public withUserPassword(userPassword?: string): MeetingCredentials {
    this.userPassword = userPassword;
    return this;
  }

  public setToken(token?: string): void {
    this.token = token;
  }

  public withToken(token?: string): MeetingCredentials {
    this.token = token;
    return this;
  }

  private base64encode(str: string): string {
    const base64EncodeChars: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let out: string, i: number, len: number;
    let c1: number, c2: number, c3: number;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
      c1 = str.charCodeAt(i++) & 0xff;
      if (i == len) {
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt((c1 & 0x3) << 4);
        out += "==";
        break;
      }
      c2 = str.charCodeAt(i++);
      if (i == len) {
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
        out += base64EncodeChars.charAt((c2 & 0xf) << 2);
        out += "=";
        break;
      }
      c3 = str.charCodeAt(i++);
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
      out += base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
      out += base64EncodeChars.charAt(c3 & 0x3f);
    }
    return out;
  }
}
