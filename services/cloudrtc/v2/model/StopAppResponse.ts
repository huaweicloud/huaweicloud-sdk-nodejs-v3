import { AppState } from './AppState';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopAppResponse extends SdkResponse {
    private 'app_id'?: string | undefined;
    public state?: AppState;
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): StopAppResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withState(state: AppState): StopAppResponse {
        this['state'] = state;
        return this;
    }
    public withXRequestId(xRequestId: string): StopAppResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-Id'];
    }
}