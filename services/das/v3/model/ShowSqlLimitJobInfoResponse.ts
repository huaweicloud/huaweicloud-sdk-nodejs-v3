
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlLimitJobInfoResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'job_status'?: ShowSqlLimitJobInfoResponseJobStatusEnum | string;
    private 'fail_reason'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowSqlLimitJobInfoResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobStatus(jobStatus: ShowSqlLimitJobInfoResponseJobStatusEnum | string): ShowSqlLimitJobInfoResponse {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: ShowSqlLimitJobInfoResponseJobStatusEnum | string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): ShowSqlLimitJobInfoResponseJobStatusEnum | string | undefined {
        return this['job_status'];
    }
    public withFailReason(failReason: string): ShowSqlLimitJobInfoResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlLimitJobInfoResponseJobStatusEnum {
    RUNNING = 'RUNNING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED'
}
