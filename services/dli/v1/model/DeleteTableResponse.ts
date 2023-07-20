
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTableResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_mode'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): DeleteTableResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): DeleteTableResponse {
        this['message'] = message;
        return this;
    }
    public withJobMode(jobMode: string): DeleteTableResponse {
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