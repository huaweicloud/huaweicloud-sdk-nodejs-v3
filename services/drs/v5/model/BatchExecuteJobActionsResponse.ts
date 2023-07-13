import { AsyncActionResp } from './AsyncActionResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchExecuteJobActionsResponse extends SdkResponse {
    public jobs?: Array<AsyncActionResp>;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<AsyncActionResp>): BatchExecuteJobActionsResponse {
        this['jobs'] = jobs;
        return this;
    }
}