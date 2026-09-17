import { BatchUpdateResponseResult } from './BatchUpdateResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateScrumIssuesResponse extends SdkResponse {
    public result?: BatchUpdateResponseResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: BatchUpdateResponseResult): BatchUpdateScrumIssuesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchUpdateScrumIssuesResponse {
        this['status'] = status;
        return this;
    }
}