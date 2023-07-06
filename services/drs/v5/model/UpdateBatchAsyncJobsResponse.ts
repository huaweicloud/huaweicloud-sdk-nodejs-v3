import { AsyncUpdateJobResp } from './AsyncUpdateJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBatchAsyncJobsResponse extends SdkResponse {
    public jobs?: Array<AsyncUpdateJobResp>;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<AsyncUpdateJobResp>): UpdateBatchAsyncJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}