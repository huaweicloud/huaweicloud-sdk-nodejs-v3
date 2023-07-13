import { DeleteJobResp } from './DeleteJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteJobsByIdResponse extends SdkResponse {
    public jobs?: Array<DeleteJobResp>;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<DeleteJobResp>): BatchDeleteJobsByIdResponse {
        this['jobs'] = jobs;
        return this;
    }
}