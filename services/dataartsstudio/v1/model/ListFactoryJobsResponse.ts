import { JobResp } from './JobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryJobsResponse extends SdkResponse {
    public total?: number;
    public jobs?: Array<JobResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFactoryJobsResponse {
        this['total'] = total;
        return this;
    }
    public withJobs(jobs: Array<JobResp>): ListFactoryJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}