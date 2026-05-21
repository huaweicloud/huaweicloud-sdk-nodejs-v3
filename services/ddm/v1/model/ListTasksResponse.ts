import { JobItem } from './JobItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public jobs?: Array<JobItem>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListTasksResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTasksResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListTasksResponse {
        this['total'] = total;
        return this;
    }
    public withJobs(jobs: Array<JobItem>): ListTasksResponse {
        this['jobs'] = jobs;
        return this;
    }
}