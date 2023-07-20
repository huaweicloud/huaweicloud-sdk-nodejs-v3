import { BatchDeleteConsumerGroupResp } from './BatchDeleteConsumerGroupResp';
import { CreateGroupResp } from './CreateGroupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConsumerGroupOrBatchDeleteConsumerGroupResponse extends SdkResponse {
    private 'job_id'?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateConsumerGroupOrBatchDeleteConsumerGroupResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withName(name: string): CreateConsumerGroupOrBatchDeleteConsumerGroupResponse {
        this['name'] = name;
        return this;
    }
}