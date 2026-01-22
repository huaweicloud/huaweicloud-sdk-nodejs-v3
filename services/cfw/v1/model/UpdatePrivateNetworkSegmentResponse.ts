
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrivateNetworkSegmentResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): UpdatePrivateNetworkSegmentResponse {
        this['data'] = data;
        return this;
    }
}