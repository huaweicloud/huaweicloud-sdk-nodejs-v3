import { JobIdInfo } from './JobIdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateTsviResponse extends SdkResponse {
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): BatchUpdateTsviResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}