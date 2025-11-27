
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncGroupResourceResponse extends SdkResponse {
    public data?: number;
    public constructor() { 
        super();
    }
    public withData(data: number): SyncGroupResourceResponse {
        this['data'] = data;
        return this;
    }
}