import { UpdateJobRespJob } from './UpdateJobRespJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFlinkJarResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public job?: UpdateJobRespJob;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): UpdateFlinkJarResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): UpdateFlinkJarResponse {
        this['message'] = message;
        return this;
    }
    public withJob(job: UpdateJobRespJob): UpdateFlinkJarResponse {
        this['job'] = job;
        return this;
    }
}