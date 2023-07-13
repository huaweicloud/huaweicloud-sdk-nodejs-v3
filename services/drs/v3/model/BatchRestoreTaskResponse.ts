import { RetryTaskResp } from './RetryTaskResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRestoreTaskResponse extends SdkResponse {
    public results?: Array<RetryTaskResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<RetryTaskResp>): BatchRestoreTaskResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchRestoreTaskResponse {
        this['count'] = count;
        return this;
    }
}