import { JobDetail } from './JobDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    public job?: JobDetail;
    public constructor() { 
        super();
    }
    public withJob(job: JobDetail): ShowJobResponse {
        this['job'] = job;
        return this;
    }
}