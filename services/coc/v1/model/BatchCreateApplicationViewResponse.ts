import { BatchCreateApplicationViewResponseBodyData } from './BatchCreateApplicationViewResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateApplicationViewResponse extends SdkResponse {
    public data?: BatchCreateApplicationViewResponseBodyData;
    public constructor() { 
        super();
    }
    public withData(data: BatchCreateApplicationViewResponseBodyData): BatchCreateApplicationViewResponse {
        this['data'] = data;
        return this;
    }
}