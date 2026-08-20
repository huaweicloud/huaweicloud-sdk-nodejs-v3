import { ScheduledTaskEntity } from './ScheduledTaskEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledTasksResponse extends SdkResponse {
    private 'job_count'?: number;
    public jobs?: Array<ScheduledTaskEntity>;
    public constructor() { 
        super();
    }
    public withJobCount(jobCount: number): ListScheduledTasksResponse {
        this['job_count'] = jobCount;
        return this;
    }
    public set jobCount(jobCount: number  | undefined) {
        this['job_count'] = jobCount;
    }
    public get jobCount(): number | undefined {
        return this['job_count'];
    }
    public withJobs(jobs: Array<ScheduledTaskEntity>): ListScheduledTasksResponse {
        this['jobs'] = jobs;
        return this;
    }
}