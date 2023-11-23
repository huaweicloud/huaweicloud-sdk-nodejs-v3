import { UpdateJobRespJob } from './UpdateJobRespJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFlinkJarJobResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public job?: UpdateJobRespJob;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): UpdateFlinkJarJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): UpdateFlinkJarJobResponse {
        this['message'] = message;
        return this;
    }
    public withJob(job: UpdateJobRespJob): UpdateFlinkJarJobResponse {
        this['job'] = job;
        return this;
    }
}