import { EipResponseData } from './EipResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEipResourcesResponse extends SdkResponse {
    public data?: EipResponseData;
    public constructor() { 
        super();
    }
    public withData(data: EipResponseData): ListEipResourcesResponse {
        this['data'] = data;
        return this;
    }
}