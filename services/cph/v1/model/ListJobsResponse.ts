import { Job } from './Job';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobsResponse extends SdkResponse {
    private 'request_id'?: string;
    public jobs?: Array<Job>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListJobsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobs(jobs: Array<Job>): ListJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}