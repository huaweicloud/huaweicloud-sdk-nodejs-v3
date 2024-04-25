import { FlinkJobStatus } from './FlinkJobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlinkJarJobResponse extends SdkResponse {
    private 'is_success'?: string;
    public message?: string;
    public job?: FlinkJobStatus;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: string): CreateFlinkJarJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateFlinkJarJobResponse {
        this['message'] = message;
        return this;
    }
    public withJob(job: FlinkJobStatus): CreateFlinkJarJobResponse {
        this['job'] = job;
        return this;
    }
}