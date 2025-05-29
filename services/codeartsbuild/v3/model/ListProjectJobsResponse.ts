import { Job } from './Job';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectJobsResponse extends SdkResponse {
    public jobs?: Array<Job>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<Job>): ListProjectJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withTotal(total: number): ListProjectJobsResponse {
        this['total'] = total;
        return this;
    }
}