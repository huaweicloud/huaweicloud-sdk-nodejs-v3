
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncResourcesOfResourceViewResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): SyncResourcesOfResourceViewResponse {
        this['data'] = data;
        return this;
    }
}