import { AuthInfo } from './AuthInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuthorizationTokenResponse extends SdkResponse {
    public auths?: { [key: string]: AuthInfo; };
    private 'X-Swr-Dockerlogin'?: string;
    private 'x-swr-expireat'?: string;
    public constructor() { 
        super();
    }
    public withAuths(auths: { [key: string]: AuthInfo; }): CreateAuthorizationTokenResponse {
        this['auths'] = auths;
        return this;
    }
    public withXSwrDockerlogin(xSwrDockerlogin: string): CreateAuthorizationTokenResponse {
        this['X-Swr-Dockerlogin'] = xSwrDockerlogin;
        return this;
    }
    public set xSwrDockerlogin(xSwrDockerlogin: string  | undefined) {
        this['X-Swr-Dockerlogin'] = xSwrDockerlogin;
    }
    public get xSwrDockerlogin(): string | undefined {
        return this['X-Swr-Dockerlogin'];
    }
    public withXSwrExpireat(xSwrExpireat: string): CreateAuthorizationTokenResponse {
        this['x-swr-expireat'] = xSwrExpireat;
        return this;
    }
    public set xSwrExpireat(xSwrExpireat: string  | undefined) {
        this['x-swr-expireat'] = xSwrExpireat;
    }
    public get xSwrExpireat(): string | undefined {
        return this['x-swr-expireat'];
    }
}