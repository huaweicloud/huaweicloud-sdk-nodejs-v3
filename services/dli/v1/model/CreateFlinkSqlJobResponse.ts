import { FlinkJobStatus } from './FlinkJobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlinkSqlJobResponse extends SdkResponse {
    private 'is_success'?: string;
    public message?: string;
    public job?: FlinkJobStatus;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: string): CreateFlinkSqlJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateFlinkSqlJobResponse {
        this['message'] = message;
        return this;
    }
    public withJob(job: FlinkJobStatus): CreateFlinkSqlJobResponse {
        this['job'] = job;
        return this;
    }
}