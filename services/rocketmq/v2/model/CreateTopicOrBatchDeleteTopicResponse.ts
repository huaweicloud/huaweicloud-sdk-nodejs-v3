import { BatchDeleteTopicResp } from './BatchDeleteTopicResp';
import { CreateTopicResp } from './CreateTopicResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTopicOrBatchDeleteTopicResponse extends SdkResponse {
    public id?: string;
    private 'job_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateTopicOrBatchDeleteTopicResponse {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: string): CreateTopicOrBatchDeleteTopicResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}