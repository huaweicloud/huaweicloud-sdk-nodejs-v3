import { LtsInfoJob } from './LtsInfoJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SelectGroupAndStreamResponse extends SdkResponse {
    public job?: LtsInfoJob;
    public constructor() { 
        super();
    }
    public withJob(job: LtsInfoJob): SelectGroupAndStreamResponse {
        this['job'] = job;
        return this;
    }
}