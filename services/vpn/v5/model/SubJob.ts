

export class SubJob {
    public id?: string;
    private 'job_type'?: SubJobJobTypeEnum | string;
    public status?: SubJobStatusEnum | string;
    private 'created_at'?: Date;
    private 'finished_at'?: Date;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withId(id: string): SubJob {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: SubJobJobTypeEnum | string): SubJob {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: SubJobJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): SubJobJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withStatus(status: SubJobStatusEnum | string): SubJob {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): SubJob {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withFinishedAt(finishedAt: Date): SubJob {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: Date  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): Date | undefined {
        return this['finished_at'];
    }
    public withErrorMessage(errorMessage: string): SubJob {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubJobJobTypeEnum {
    PREPARE_RESOURCE = 'prepare_resource',
    UPGRADE_WORKER_1 = 'upgrade_worker_1',
    UPGRADE_WORKER_2 = 'upgrade_worker_2'
}
/**
    * @export
    * @enum {string}
    */
export enum SubJobStatusEnum {
    INIT = 'init',
    UPGRADING = 'upgrading',
    SUCCESS = 'success',
    FAIL = 'fail'
}
