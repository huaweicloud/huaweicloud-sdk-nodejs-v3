import { PhoneJob } from './PhoneJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PushFileResponse extends SdkResponse {
    private 'request_id'?: string;
    public jobs?: Array<PhoneJob>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): PushFileResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobs(jobs: Array<PhoneJob>): PushFileResponse {
        this['jobs'] = jobs;
        return this;
    }
}