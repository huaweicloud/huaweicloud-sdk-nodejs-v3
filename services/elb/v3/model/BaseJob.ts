

export class BaseJob {
    public status?: BaseJobStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'project_id'?: string;
    private 'resource_id'?: string;
    public constructor() { 
    }
    public withStatus(status: BaseJobStatusEnum | string): BaseJob {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): BaseJob {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): BaseJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobId(jobId: string): BaseJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): BaseJob {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withErrorCode(errorCode: string): BaseJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): BaseJob {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withProjectId(projectId: string): BaseJob {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceId(resourceId: string): BaseJob {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseJobStatusEnum {
    INIT = 'INIT',
    RUNNING = 'RUNNING',
    FAIL = 'FAIL',
    SUCCESS = 'SUCCESS',
    ROLLBACKING = 'ROLLBACKING',
    COMPLETE = 'COMPLETE',
    ROLLBACK_FAIL = 'ROLLBACK_FAIL',
    CANCEL = 'CANCEL'
}
