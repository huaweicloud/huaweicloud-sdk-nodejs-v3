import { JobQueryBean } from './JobQueryBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSingleJobExeResponse extends SdkResponse {
    private 'job_detail'?: JobQueryBean | undefined;
    public constructor() { 
        super();
    }
    public withJobDetail(jobDetail: JobQueryBean): ShowSingleJobExeResponse {
        this['job_detail'] = jobDetail;
        return this;
    }
    public set jobDetail(jobDetail: JobQueryBean | undefined) {
        this['job_detail'] = jobDetail;
    }
    public get jobDetail() {
        return this['job_detail'];
    }
}