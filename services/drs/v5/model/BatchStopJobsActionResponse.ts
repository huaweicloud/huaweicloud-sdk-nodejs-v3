import { ActionBaseResp } from './ActionBaseResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchStopJobsActionResponse extends SdkResponse {
    public jobs?: Array<ActionBaseResp>;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<ActionBaseResp>): BatchStopJobsActionResponse {
        this['jobs'] = jobs;
        return this;
    }
}