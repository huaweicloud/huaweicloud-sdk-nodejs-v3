import { JobInfo } from './JobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    public jobs?: Array<JobInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<JobInfo>): ListTasksResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withTotalCount(totalCount: number): ListTasksResponse {
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