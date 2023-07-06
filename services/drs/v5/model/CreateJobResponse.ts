import { CreateJobResp } from './CreateJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateJobResponse extends SdkResponse {
    public job?: CreateJobResp;
    public constructor() { 
        super();
    }
    public withJob(job: CreateJobResp): CreateJobResponse {
        this['job'] = job;
        return this;
    }
}