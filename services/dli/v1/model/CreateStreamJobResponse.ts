import { StreamJobStatus } from './StreamJobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStreamJobResponse extends SdkResponse {
    private 'is_success'?: string;
    public message?: string;
    public job?: StreamJobStatus;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: string): CreateStreamJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateStreamJobResponse {
        this['message'] = message;
        return this;
    }
    public withJob(job: StreamJobStatus): CreateStreamJobResponse {
        this['job'] = job;
        return this;
    }
}