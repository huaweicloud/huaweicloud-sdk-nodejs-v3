import { FlinkJobStatus } from './FlinkJobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlinkSqlJobResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public job?: FlinkJobStatus;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateFlinkSqlJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
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