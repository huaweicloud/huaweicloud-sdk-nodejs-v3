import { RestResponse } from './RestResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWebHookConfigResponse extends SdkResponse {
    public returnCode: number;
    public returnDesc?: string;
    public id?: string;
    public subscriberId?: string;
    public url?: string;
    public status?: number;
    public constructor(returnCode?: any) { 
        super();
        this['returnCode'] = returnCode;
    }
    public withReturnCode(returnCode: number): ShowWebHookConfigResponse {
        this['returnCode'] = returnCode;
        return this;
    }
    public withReturnDesc(returnDesc: string): ShowWebHookConfigResponse {
        this['returnDesc'] = returnDesc;
        return this;
    }
    public withId(id: string): ShowWebHookConfigResponse {
        this['id'] = id;
        return this;
    }
    public withSubscriberId(subscriberId: string): ShowWebHookConfigResponse {
        this['subscriberId'] = subscriberId;
        return this;
    }
    public withUrl(url: string): ShowWebHookConfigResponse {
        this['url'] = url;
        return this;
    }
    public withStatus(status: number): ShowWebHookConfigResponse {
        this['status'] = status;
        return this;
    }
}