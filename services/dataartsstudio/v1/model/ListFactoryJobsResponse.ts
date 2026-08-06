import { JobResultV2 } from './JobResultV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryJobsResponse extends SdkResponse {
    public total?: number;
    public jobs?: Array<JobResultV2>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFactoryJobsResponse {
        this['total'] = total;
        return this;
    }
    public withJobs(jobs: Array<JobResultV2>): ListFactoryJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}