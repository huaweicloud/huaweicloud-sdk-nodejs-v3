import { FlinkJob } from './FlinkJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlinkJobResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_detail'?: FlinkJob;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowFlinkJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowFlinkJobResponse {
        this['message'] = message;
        return this;
    }
    public withJobDetail(jobDetail: FlinkJob): ShowFlinkJobResponse {
        this['job_detail'] = jobDetail;
        return this;
    }
    public set jobDetail(jobDetail: FlinkJob  | undefined) {
        this['job_detail'] = jobDetail;
    }
    public get jobDetail(): FlinkJob | undefined {
        return this['job_detail'];
    }
}