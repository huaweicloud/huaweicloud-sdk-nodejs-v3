import { JobDetail } from './JobDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceJobsResponse extends SdkResponse {
    public jobs?: Array<JobDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<JobDetail>): ListInstanceJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withTotal(total: number): ListInstanceJobsResponse {
        this['total'] = total;
        return this;
    }
}