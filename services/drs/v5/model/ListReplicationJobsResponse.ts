import { OfflineTaskInfo } from './OfflineTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReplicationJobsResponse extends SdkResponse {
    public count?: number;
    public jobs?: Array<OfflineTaskInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListReplicationJobsResponse {
        this['count'] = count;
        return this;
    }
    public withJobs(jobs: Array<OfflineTaskInfo>): ListReplicationJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}