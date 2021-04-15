import { SubJobEntities } from './SubJobEntities';


export class SubJob {
    public status?: SubJobStatusEnum;
    public entities?: SubJobEntities;
    private 'job_id'?: string | undefined;
    private 'job_type'?: string | undefined;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'error_code'?: string | undefined;
    private 'fail_reason'?: string | undefined;
    public constructor() { 
    }
    public withStatus(status: SubJobStatusEnum): SubJob {
        this['status'] = status;
        return this;
    }
    public withEntities(entities: SubJobEntities): SubJob {
        this['entities'] = entities;
        return this;
    }
    public withJobId(jobId: string): SubJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withJobType(jobType: string): SubJob {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withBeginTime(beginTime: string): SubJob {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SubJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): SubJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withFailReason(failReason: string): SubJob {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason() {
        return this['fail_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubJobStatusEnum {
    SUCCESS = 'SUCCESS',
    RUNNING = 'RUNNING',
    FAIL = 'FAIL',
    INIT = 'INIT'
}
