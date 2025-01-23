import { BaseJob } from './BaseJob';
import { JobEntities } from './JobEntities';


export class SubJob {
    public status?: SubJobStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'project_id'?: string;
    private 'resource_id'?: string;
    public entities?: Array<JobEntities>;
    public constructor() { 
    }
    public withStatus(status: SubJobStatusEnum | string): SubJob {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): SubJob {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SubJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobId(jobId: string): SubJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): SubJob {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withErrorCode(errorCode: string): SubJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): SubJob {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withProjectId(projectId: string): SubJob {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceId(resourceId: string): SubJob {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withEntities(entities: Array<JobEntities>): SubJob {
        this['entities'] = entities;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubJobStatusEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    FAIL = 'FAIL',
    SUCCESS = 'SUCCESS',
    ROLLBACKING = 'ROLLBACKING',
    COMPLETE = 'COMPLETE',
    ROLLBACK_FAIL = 'ROLLBACK_FAIL',
    CANCEL = 'CANCEL'
}
