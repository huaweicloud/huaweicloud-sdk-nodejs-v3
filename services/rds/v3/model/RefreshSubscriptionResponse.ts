
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RefreshSubscriptionResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): RefreshSubscriptionResponse {
        this['resp'] = resp;
        return this;
    }
}