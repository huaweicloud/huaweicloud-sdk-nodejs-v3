import { FlinkJobDetail } from './FlinkJobDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlinkJobResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_detail'?: FlinkJobDetail;
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
    public withJobDetail(jobDetail: FlinkJobDetail): ShowFlinkJobResponse {
        this['job_detail'] = jobDetail;
        return this;
    }
    public set jobDetail(jobDetail: FlinkJobDetail  | undefined) {
        this['job_detail'] = jobDetail;
    }
    public get jobDetail(): FlinkJobDetail | undefined {
        return this['job_detail'];
    }
}