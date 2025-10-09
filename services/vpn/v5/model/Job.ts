import { SubJob } from './SubJob';


export class Job {
    public id?: string;
    private 'resource_id'?: string;
    private 'job_type'?: JobJobTypeEnum | string;
    public status?: JobStatusEnum | string;
    private 'created_at'?: Date;
    private 'finished_at'?: Date;
    private 'error_message'?: string;
    private 'sub_jobs'?: Array<SubJob>;
    public constructor() { 
    }
    public withId(id: string): Job {
        this['id'] = id;
        return this;
    }
    public withResourceId(resourceId: string): Job {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withJobType(jobType: JobJobTypeEnum | string): Job {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withStatus(status: JobStatusEnum | string): Job {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): Job {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withFinishedAt(finishedAt: Date): Job {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: Date  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): Date | undefined {
        return this['finished_at'];
    }
    public withErrorMessage(errorMessage: string): Job {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withSubJobs(subJobs: Array<SubJob>): Job {
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
export enum JobJobTypeEnum {
    UPGRADE = 'upgrade',
    ROLLBACK = 'rollback'
}
/**
    * @export
    * @enum {string}
    */
export enum JobStatusEnum {
    UPGRADING = 'upgrading',
    PENDING_UPGRADE_CONFIRM = 'pending_upgrade_confirm',
    SUCCESS = 'success',
    ROLLING_BACK = 'rolling_back',
    ROLLBACK_SUCCESS = 'rollback_success',
    FAIL = 'fail'
}
