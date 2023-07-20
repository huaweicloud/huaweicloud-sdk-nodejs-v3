import { BaseResp } from './BaseResp';
import { JobListResp } from './JobListResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobsResponse extends SdkResponse {
    private 'total_count'?: number;
    public jobs?: Array<JobListResp>;
    public constructor(totalCount?: number, jobs?: Array<JobListResp>) { 
        super();
        this['total_count'] = totalCount;
        this['jobs'] = jobs;
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
    public withJobs(jobs: Array<JobListResp>): ListJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}