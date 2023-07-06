import { AsyncJobResp } from './AsyncJobResp';
import { BaseResp } from './BaseResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncJobsResponse extends SdkResponse {
    private 'total_count': number | undefined;
    public jobs: Array<AsyncJobResp>;
    public constructor(totalCount?: any, jobs?: any) { 
        super();
        this['total_count'] = totalCount;
        this['jobs'] = jobs;
    }
    public withTotalCount(totalCount: number): ListAsyncJobsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
    public withJobs(jobs: Array<AsyncJobResp>): ListAsyncJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}