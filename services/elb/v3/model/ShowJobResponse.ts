import { MainJob } from './MainJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    public job?: MainJob;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withJob(job: MainJob): ShowJobResponse {
        this['job'] = job;
        return this;
    }
    public withRequestId(requestId: string): ShowJobResponse {
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