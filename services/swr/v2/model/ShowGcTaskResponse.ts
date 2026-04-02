import { JobParameters } from './JobParameters';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGcTaskResponse extends SdkResponse {
    public id?: number;
    private 'job_name'?: string;
    private 'job_kind'?: ShowGcTaskResponseJobKindEnum | string;
    private 'job_parameters'?: JobParameters;
    private 'job_status'?: ShowGcTaskResponseJobStatusEnum | string;
    private 'creation_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowGcTaskResponse {
        this['id'] = id;
        return this;
    }
    public withJobName(jobName: string): ShowGcTaskResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobKind(jobKind: ShowGcTaskResponseJobKindEnum | string): ShowGcTaskResponse {
        this['job_kind'] = jobKind;
        return this;
    }
    public set jobKind(jobKind: ShowGcTaskResponseJobKindEnum | string  | undefined) {
        this['job_kind'] = jobKind;
    }
    public get jobKind(): ShowGcTaskResponseJobKindEnum | string | undefined {
        return this['job_kind'];
    }
    public withJobParameters(jobParameters: JobParameters): ShowGcTaskResponse {
        this['job_parameters'] = jobParameters;
        return this;
    }
    public set jobParameters(jobParameters: JobParameters  | undefined) {
        this['job_parameters'] = jobParameters;
    }
    public get jobParameters(): JobParameters | undefined {
        return this['job_parameters'];
    }
    public withJobStatus(jobStatus: ShowGcTaskResponseJobStatusEnum | string): ShowGcTaskResponse {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: ShowGcTaskResponseJobStatusEnum | string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): ShowGcTaskResponseJobStatusEnum | string | undefined {
        return this['job_status'];
    }
    public withCreationTime(creationTime: string): ShowGcTaskResponse {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: string  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): string | undefined {
        return this['creation_time'];
    }
    public withUpdateTime(updateTime: string): ShowGcTaskResponse {
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
export enum ShowGcTaskResponseJobKindEnum {
    MANUAL = 'MANUAL',
    SCHEDULE = 'SCHEDULE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowGcTaskResponseJobStatusEnum {
    SUCCESS = 'Success',
    STOPPED = 'Stopped',
    RUNNING = 'Running',
    PENDING = 'Pending',
    ERROR = 'Error'
}
