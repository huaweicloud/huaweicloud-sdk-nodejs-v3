import { FlinkJob } from './FlinkJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlinkJarJobResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public job?: FlinkJob;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateFlinkJarJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateFlinkJarJobResponse {
        this['message'] = message;
        return this;
    }
    public withJob(job: FlinkJob): CreateFlinkJarJobResponse {
        this['job'] = job;
        return this;
    }
}