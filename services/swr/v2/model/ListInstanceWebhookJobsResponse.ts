import { Job } from './Job';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceWebhookJobsResponse extends SdkResponse {
    public jobs?: Array<Job>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<Job>): ListInstanceWebhookJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withTotal(total: number): ListInstanceWebhookJobsResponse {
        this['total'] = total;
        return this;
    }
}