import { BatchDeletesResponseResult } from './BatchDeletesResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteScrumWorkitemResponse extends SdkResponse {
    public result?: BatchDeletesResponseResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: BatchDeletesResponseResult): BatchDeleteScrumWorkitemResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchDeleteScrumWorkitemResponse {
        this['status'] = status;
        return this;
    }
}