
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreatePrivateNetworkSegmentsResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): BatchCreatePrivateNetworkSegmentsResponse {
        this['data'] = data;
        return this;
    }
}