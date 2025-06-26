import { JobDetailStatus } from './JobDetailStatus';
import { JobResourceInfo } from './JobResourceInfo';
import { JobType } from './JobType';


export class JobDetailInfo {
    public id?: string;
    private 'job_type'?: JobType;
    private 'job_resource_info'?: JobResourceInfo;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    public status?: JobDetailStatus;
    private 'error_code'?: string;
    private 'error_message'?: string;
    private 'project_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withId(id: string): JobDetailInfo {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: JobType): JobDetailInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobType | undefined {
        return this['job_type'];
    }
    public withJobResourceInfo(jobResourceInfo: JobResourceInfo): JobDetailInfo {
        this['job_resource_info'] = jobResourceInfo;
        return this;
    }
    public set jobResourceInfo(jobResourceInfo: JobResourceInfo  | undefined) {
        this['job_resource_info'] = jobResourceInfo;
    }
    public get jobResourceInfo(): JobResourceInfo | undefined {
        return this['job_resource_info'];
    }
    public withBeginTime(beginTime: Date): JobDetailInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): JobDetailInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: JobDetailStatus): JobDetailInfo {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): JobDetailInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): JobDetailInfo {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withProjectId(projectId: string): JobDetailInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobId(jobId: string): JobDetailInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}