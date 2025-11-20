import { Instance } from './Instance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceResponse extends SdkResponse {
    private 'request_id'?: string;
    public instance?: Instance;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateInstanceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInstance(instance: Instance): CreateInstanceResponse {
        this['instance'] = instance;
        return this;
    }
    public withJobId(jobId: string): CreateInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}