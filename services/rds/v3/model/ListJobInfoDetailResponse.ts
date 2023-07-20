import { GetTaskDetailListRspJobs } from './GetTaskDetailListRspJobs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobInfoDetailResponse extends SdkResponse {
    public jobs?: GetTaskDetailListRspJobs;
    public count?: number;
    public constructor() { 
        super();
    }
    public withJobs(jobs: GetTaskDetailListRspJobs): ListJobInfoDetailResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withCount(count: number): ListJobInfoDetailResponse {
        this['count'] = count;
        return this;
    }
}