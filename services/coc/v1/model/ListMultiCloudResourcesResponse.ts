import { BatchListMultiCloudResourceResponseData } from './BatchListMultiCloudResourceResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMultiCloudResourcesResponse extends SdkResponse {
    public data?: Array<BatchListMultiCloudResourceResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<BatchListMultiCloudResourceResponseData>): ListMultiCloudResourcesResponse {
        this['data'] = data;
        return this;
    }
}