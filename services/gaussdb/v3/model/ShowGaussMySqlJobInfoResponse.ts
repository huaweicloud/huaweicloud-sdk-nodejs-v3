import { GetJobInfoDetail } from './GetJobInfoDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlJobInfoResponse extends SdkResponse {
    public job?: GetJobInfoDetail;
    public constructor() { 
        super();
    }
    public withJob(job: GetJobInfoDetail): ShowGaussMySqlJobInfoResponse {
        this['job'] = job;
        return this;
    }
}