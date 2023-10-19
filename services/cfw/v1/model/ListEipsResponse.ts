import { EipResponseData } from './EipResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEipsResponse extends SdkResponse {
    public data?: EipResponseData;
    public constructor() { 
        super();
    }
    public withData(data: EipResponseData): ListEipsResponse {
        this['data'] = data;
        return this;
    }
}