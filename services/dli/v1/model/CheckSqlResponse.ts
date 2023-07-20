
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckSqlResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_type'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CheckSqlResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CheckSqlResponse {
        this['message'] = message;
        return this;
    }
    public withJobType(jobType: string): CheckSqlResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
}