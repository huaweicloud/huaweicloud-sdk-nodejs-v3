
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetInstancesDbShrinkResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): SetInstancesDbShrinkResponse {
        this['resp'] = resp;
        return this;
    }
}