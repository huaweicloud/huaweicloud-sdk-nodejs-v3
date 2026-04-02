import { JobParameters } from './JobParameters';


export class GcTask {
    public id?: number;
    private 'job_name'?: string;
    private 'job_kind'?: GcTaskJobKindEnum | string;
    private 'job_parameters'?: JobParameters;
    private 'job_status'?: GcTaskJobStatusEnum | string;
    private 'creation_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: number): GcTask {
        this['id'] = id;
        return this;
    }
    public withJobName(jobName: string): GcTask {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobKind(jobKind: GcTaskJobKindEnum | string): GcTask {
        this['job_kind'] = jobKind;
        return this;
    }
    public set jobKind(jobKind: GcTaskJobKindEnum | string  | undefined) {
        this['job_kind'] = jobKind;
    }
    public get jobKind(): GcTaskJobKindEnum | string | undefined {
        return this['job_kind'];
    }
    public withJobParameters(jobParameters: JobParameters): GcTask {
        this['job_parameters'] = jobParameters;
        return this;
    }
    public set jobParameters(jobParameters: JobParameters  | undefined) {
        this['job_parameters'] = jobParameters;
    }
    public get jobParameters(): JobParameters | undefined {
        return this['job_parameters'];
    }
    public withJobStatus(jobStatus: GcTaskJobStatusEnum | string): GcTask {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: GcTaskJobStatusEnum | string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): GcTaskJobStatusEnum | string | undefined {
        return this['job_status'];
    }
    public withCreationTime(creationTime: string): GcTask {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: string  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): string | undefined {
        return this['creation_time'];
    }
    public withUpdateTime(updateTime: string): GcTask {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GcTaskJobKindEnum {
    MANUAL = 'MANUAL',
    SCHEDULE = 'SCHEDULE'
}
/**
    * @export
    * @enum {string}
    */
export enum GcTaskJobStatusEnum {
    SUCCESS = 'Success',
    STOPPED = 'Stopped',
    RUNNING = 'Running',
    PENDING = 'Pending',
    ERROR = 'Error'
}
