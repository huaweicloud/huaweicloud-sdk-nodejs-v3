import { ResourceMultiCountResponseData } from './ResourceMultiCountResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountMultiResourcesResponse extends SdkResponse {
    public data?: Array<ResourceMultiCountResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<ResourceMultiCountResponseData>): CountMultiResourcesResponse {
        this['data'] = data;
        return this;
    }
}