import { JobItem } from './JobItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    public jobs?: Array<JobItem>;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<JobItem>): ListTasksResponse {
        this['jobs'] = jobs;
        return this;
    }
}