import { AppAuth } from './AppAuth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUrlAuthResponse extends SdkResponse {
    private 'app_id'?: string;
    public authentication?: AppAuth;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): ShowUrlAuthResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAuthentication(authentication: AppAuth): ShowUrlAuthResponse {
        this['authentication'] = authentication;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowUrlAuthResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}