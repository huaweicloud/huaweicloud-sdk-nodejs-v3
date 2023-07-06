import { JobDetailResp } from './JobDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobDetailResponse extends SdkResponse {
    public job?: JobDetailResp;
    public constructor() { 
        super();
    }
    public withJob(job: JobDetailResp): ShowJobDetailResponse {
        this['job'] = job;
        return this;
    }
}