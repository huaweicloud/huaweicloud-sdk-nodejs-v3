import { JobInfo } from './JobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDdmJobResultResponse extends SdkResponse {
    public job?: JobInfo;
    public constructor() { 
        super();
    }
    public withJob(job: JobInfo): ShowDdmJobResultResponse {
        this['job'] = job;
        return this;
    }
}