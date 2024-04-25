import { FlinkJobUpdateTime } from './FlinkJobUpdateTime';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFlinkJarJobResponse extends SdkResponse {
    private 'is_success'?: string;
    public message?: string;
    public job?: FlinkJobUpdateTime;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: string): UpdateFlinkJarJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): UpdateFlinkJarJobResponse {
        this['message'] = message;
        return this;
    }
    public withJob(job: FlinkJobUpdateTime): UpdateFlinkJarJobResponse {
        this['job'] = job;
        return this;
    }
}