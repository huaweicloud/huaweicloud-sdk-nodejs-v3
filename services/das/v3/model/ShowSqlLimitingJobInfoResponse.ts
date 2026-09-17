
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlLimitingJobInfoResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'job_type'?: string;
    public status?: string;
    private 'fail_reason'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowSqlLimitingJobInfoResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ShowSqlLimitingJobInfoResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobType(jobType: string): ShowSqlLimitingJobInfoResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withStatus(status: string): ShowSqlLimitingJobInfoResponse {
        this['status'] = status;
        return this;
    }
    public withFailReason(failReason: string): ShowSqlLimitingJobInfoResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}