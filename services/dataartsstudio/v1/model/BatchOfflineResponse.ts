import { BatchOfflineResultData } from './BatchOfflineResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchOfflineResponse extends SdkResponse {
    public data?: BatchOfflineResultData;
    public constructor() { 
        super();
    }
    public withData(data: BatchOfflineResultData): BatchOfflineResponse {
        this['data'] = data;
        return this;
    }
}