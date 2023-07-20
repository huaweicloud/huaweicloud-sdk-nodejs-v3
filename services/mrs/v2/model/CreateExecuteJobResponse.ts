import { JobSubmitResult } from './JobSubmitResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExecuteJobResponse extends SdkResponse {
    private 'job_submit_result'?: JobSubmitResult;
    public constructor() { 
        super();
    }
    public withJobSubmitResult(jobSubmitResult: JobSubmitResult): CreateExecuteJobResponse {
        this['job_submit_result'] = jobSubmitResult;
        return this;
    }
    public set jobSubmitResult(jobSubmitResult: JobSubmitResult  | undefined) {
        this['job_submit_result'] = jobSubmitResult;
    }
    public get jobSubmitResult(): JobSubmitResult | undefined {
        return this['job_submit_result'];
    }
}