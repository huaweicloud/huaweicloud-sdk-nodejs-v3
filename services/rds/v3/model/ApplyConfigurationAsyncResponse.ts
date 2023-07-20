
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyConfigurationAsyncResponse extends SdkResponse {
    private 'configuration_id'?: string;
    private 'configuration_name'?: string;
    public success?: boolean;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withConfigurationId(configurationId: string): ApplyConfigurationAsyncResponse {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withConfigurationName(configurationName: string): ApplyConfigurationAsyncResponse {
        this['configuration_name'] = configurationName;
        return this;
    }
    public set configurationName(configurationName: string  | undefined) {
        this['configuration_name'] = configurationName;
    }
    public get configurationName(): string | undefined {
        return this['configuration_name'];
    }
    public withSuccess(success: boolean): ApplyConfigurationAsyncResponse {
        this['success'] = success;
        return this;
    }
    public withJobId(jobId: string): ApplyConfigurationAsyncResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}