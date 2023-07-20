import { JobDetail } from './JobDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobDetailResponse extends SdkResponse {
    public job?: JobDetail;
    public constructor() { 
        super();
    }
    public withJob(job: JobDetail): ShowJobDetailResponse {
        this['job'] = job;
        return this;
    }
}