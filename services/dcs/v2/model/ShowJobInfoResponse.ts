
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobInfoResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'job_type'?: ShowJobInfoResponseJobTypeEnum | string;
    public status?: ShowJobInfoResponseStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'fail_reason'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowJobInfoResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: ShowJobInfoResponseJobTypeEnum | string): ShowJobInfoResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ShowJobInfoResponseJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ShowJobInfoResponseJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withStatus(status: ShowJobInfoResponseStatusEnum | string): ShowJobInfoResponse {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): ShowJobInfoResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowJobInfoResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withFailReason(failReason: string): ShowJobInfoResponse {
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
export enum ShowJobInfoResponseJobTypeEnum {
    MASTERSTANDBYSWAPJOB = 'masterStandbySwapJob',
    MODIFYCLIENTIPTRANSJOB = 'modifyClientIpTransJob'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowJobInfoResponseStatusEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL'
}
