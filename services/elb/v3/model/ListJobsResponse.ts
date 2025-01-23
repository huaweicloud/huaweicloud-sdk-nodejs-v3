import { MainJob } from './MainJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobsResponse extends SdkResponse {
    public jobs?: Array<MainJob>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<MainJob>): ListJobsResponse {
        this['jobs'] = jobs;
        return this;
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
}