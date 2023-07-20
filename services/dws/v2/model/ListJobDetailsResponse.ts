
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobDetailsResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'failed_code'?: string;
    private 'failed_detail'?: string;
    public progress?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ListJobDetailsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ListJobDetailsResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withBeginTime(beginTime: string): ListJobDetailsResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListJobDetailsResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ListJobDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withFailedCode(failedCode: string): ListJobDetailsResponse {
        this['failed_code'] = failedCode;
        return this;
    }
    public set failedCode(failedCode: string  | undefined) {
        this['failed_code'] = failedCode;
    }
    public get failedCode(): string | undefined {
        return this['failed_code'];
    }
    public withFailedDetail(failedDetail: string): ListJobDetailsResponse {
        this['failed_detail'] = failedDetail;
        return this;
    }
    public set failedDetail(failedDetail: string  | undefined) {
        this['failed_detail'] = failedDetail;
    }
    public get failedDetail(): string | undefined {
        return this['failed_detail'];
    }
    public withProgress(progress: string): ListJobDetailsResponse {
        this['progress'] = progress;
        return this;
    }
}