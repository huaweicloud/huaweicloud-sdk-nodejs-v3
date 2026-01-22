
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeletePrivateNetworkSegmentsResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): BatchDeletePrivateNetworkSegmentsResponse {
        this['data'] = data;
        return this;
    }
}