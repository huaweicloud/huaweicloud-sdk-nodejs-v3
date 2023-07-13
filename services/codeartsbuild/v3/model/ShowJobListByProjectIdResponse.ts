import { Job } from './Job';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobListByProjectIdResponse extends SdkResponse {
    public jobs?: Array<Job>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<Job>): ShowJobListByProjectIdResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withTotal(total: number): ShowJobListByProjectIdResponse {
        this['total'] = total;
        return this;
    }
}