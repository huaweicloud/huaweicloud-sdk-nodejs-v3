import { JobBean } from './JobBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditInstanceJobsNewResponse extends SdkResponse {
    public jobs?: Array<JobBean>;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<JobBean>): ListAuditInstanceJobsNewResponse {
        this['jobs'] = jobs;
        return this;
    }
}