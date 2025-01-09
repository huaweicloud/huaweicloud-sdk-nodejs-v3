import { JobDetailInfo } from './JobDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListItaSubJobsResponse extends SdkResponse {
    private 'total_count'?: number;
    public jobs?: Array<JobDetailInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListItaSubJobsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withJobs(jobs: Array<JobDetailInfo>): ListItaSubJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}