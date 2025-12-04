import { EncodeServerJob } from './EncodeServerJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestartEncodeServerResponse extends SdkResponse {
    private 'request_id'?: string;
    public jobs?: Array<EncodeServerJob>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): RestartEncodeServerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobs(jobs: Array<EncodeServerJob>): RestartEncodeServerResponse {
        this['jobs'] = jobs;
        return this;
    }
}