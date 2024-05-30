import { BatchPublishResultData } from './BatchPublishResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchPublishResponse extends SdkResponse {
    public data?: BatchPublishResultData;
    public constructor() { 
        super();
    }
    public withData(data: BatchPublishResultData): BatchPublishResponse {
        this['data'] = data;
        return this;
    }
}