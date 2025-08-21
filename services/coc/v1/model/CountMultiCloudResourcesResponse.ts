
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountMultiCloudResourcesResponse extends SdkResponse {
    public data?: number;
    public constructor() { 
        super();
    }
    public withData(data: number): CountMultiCloudResourcesResponse {
        this['data'] = data;
        return this;
    }
}