import { AsyncJobResp } from './AsyncJobResp';
import { BaseResp } from './BaseResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncJobsResponse extends SdkResponse {
    private 'total_count'?: number;
    public jobs?: Array<AsyncJobResp>;
    public constructor(totalCount?: number, jobs?: Array<AsyncJobResp>) { 
        super();
        this['total_count'] = totalCount;
        this['jobs'] = jobs;
    }
    public withTotalCount(totalCount: number): ListAsyncJobsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withJobs(jobs: Array<AsyncJobResp>): ListAsyncJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}