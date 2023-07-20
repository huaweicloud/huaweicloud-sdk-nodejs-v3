import { UpdateJobRespJob } from './UpdateJobRespJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFlinkSqlResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public job?: UpdateJobRespJob;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): UpdateFlinkSqlResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): UpdateFlinkSqlResponse {
        this['message'] = message;
        return this;
    }
    public withJob(job: UpdateJobRespJob): UpdateFlinkSqlResponse {
        this['job'] = job;
        return this;
    }
}