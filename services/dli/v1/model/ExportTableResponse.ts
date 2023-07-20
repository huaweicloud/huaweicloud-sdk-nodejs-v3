
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportTableResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_id'?: string;
    private 'job_mode'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ExportTableResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ExportTableResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): ExportTableResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobMode(jobMode: string): ExportTableResponse {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: string  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): string | undefined {
        return this['job_mode'];
    }
}