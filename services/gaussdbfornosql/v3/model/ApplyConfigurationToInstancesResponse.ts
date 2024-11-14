
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyConfigurationToInstancesResponse extends SdkResponse {
    private 'job_id'?: string;
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ApplyConfigurationToInstancesResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withSuccess(success: boolean): ApplyConfigurationToInstancesResponse {
        this['success'] = success;
        return this;
    }
}