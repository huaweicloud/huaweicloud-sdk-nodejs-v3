import { GetJobInfoResponseBodyJob } from './GetJobInfoResponseBodyJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobInfoResponse extends SdkResponse {
    public job?: GetJobInfoResponseBodyJob;
    public constructor() { 
        super();
    }
    public withJob(job: GetJobInfoResponseBodyJob): ListJobInfoResponse {
        this['job'] = job;
        return this;
    }
}