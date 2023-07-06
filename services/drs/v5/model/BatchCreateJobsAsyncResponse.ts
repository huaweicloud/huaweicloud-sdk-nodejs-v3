import { AsyncCreateJobResp } from './AsyncCreateJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateJobsAsyncResponse extends SdkResponse {
    public job?: AsyncCreateJobResp;
    public constructor() { 
        super();
    }
    public withJob(job: AsyncCreateJobResp): BatchCreateJobsAsyncResponse {
        this['job'] = job;
        return this;
    }
}