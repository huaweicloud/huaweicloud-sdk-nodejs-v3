import { BaseJob } from './BaseJob';
import { SubJob } from './SubJob';


export class MainJob {
    public status?: MainJobStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'project_id'?: string;
    private 'resource_id'?: string;
    private 'sub_jobs'?: Array<SubJob>;
    public constructor() { 
    }
    public withStatus(status: MainJobStatusEnum | string): MainJob {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): MainJob {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): MainJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobId(jobId: string): MainJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): MainJob {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withErrorCode(errorCode: string): MainJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): MainJob {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withProjectId(projectId: string): MainJob {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceId(resourceId: string): MainJob {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withSubJobs(subJobs: Array<SubJob>): MainJob {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<SubJob>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<SubJob> | undefined {
        return this['sub_jobs'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MainJobStatusEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    FAIL = 'FAIL',
    SUCCESS = 'SUCCESS',
    ROLLBACKING = 'ROLLBACKING',
    COMPLETE = 'COMPLETE',
    ROLLBACK_FAIL = 'ROLLBACK_FAIL',
    CANCEL = 'CANCEL'
}
