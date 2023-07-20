import { AppAuth } from './AppAuth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUrlAuthResponse extends SdkResponse {
    private 'app_id'?: string;
    public authentication?: AppAuth;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): UpdateUrlAuthResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAuthentication(authentication: AppAuth): UpdateUrlAuthResponse {
        this['authentication'] = authentication;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateUrlAuthResponse {
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