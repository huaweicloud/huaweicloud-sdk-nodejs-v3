import { JobDetail } from './JobDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobsResponse extends SdkResponse {
    public jobs?: Array<JobDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<JobDetail>): ListJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withTotalCount(totalCount: number): ListJobsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}