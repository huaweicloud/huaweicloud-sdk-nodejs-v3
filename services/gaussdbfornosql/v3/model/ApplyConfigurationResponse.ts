
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyConfigurationResponse extends SdkResponse {
    private 'job_id'?: string;
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ApplyConfigurationResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withSuccess(success: boolean): ApplyConfigurationResponse {
        this['success'] = success;
        return this;
    }
}