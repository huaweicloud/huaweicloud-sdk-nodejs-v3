import { ImageJobDetailStatus } from './ImageJobDetailStatus';
import { ImageJobExecuteInfo } from './ImageJobExecuteInfo';
import { ImageJobResourceInfo } from './ImageJobResourceInfo';
import { ImageJobType } from './ImageJobType';


export class ImageJobDetailInfo {
    public id?: string;
    private 'job_type'?: ImageJobType;
    private 'job_resource_info'?: ImageJobResourceInfo;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    public status?: ImageJobDetailStatus;
    private 'job_execute_info'?: ImageJobExecuteInfo;
    private 'project_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ImageJobDetailInfo {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: ImageJobType): ImageJobDetailInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ImageJobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ImageJobType | undefined {
        return this['job_type'];
    }
    public withJobResourceInfo(jobResourceInfo: ImageJobResourceInfo): ImageJobDetailInfo {
        this['job_resource_info'] = jobResourceInfo;
        return this;
    }
    public set jobResourceInfo(jobResourceInfo: ImageJobResourceInfo  | undefined) {
        this['job_resource_info'] = jobResourceInfo;
    }
    public get jobResourceInfo(): ImageJobResourceInfo | undefined {
        return this['job_resource_info'];
    }
    public withBeginTime(beginTime: Date): ImageJobDetailInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): ImageJobDetailInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: ImageJobDetailStatus): ImageJobDetailInfo {
        this['status'] = status;
        return this;
    }
    public withJobExecuteInfo(jobExecuteInfo: ImageJobExecuteInfo): ImageJobDetailInfo {
        this['job_execute_info'] = jobExecuteInfo;
        return this;
    }
    public set jobExecuteInfo(jobExecuteInfo: ImageJobExecuteInfo  | undefined) {
        this['job_execute_info'] = jobExecuteInfo;
    }
    public get jobExecuteInfo(): ImageJobExecuteInfo | undefined {
        return this['job_execute_info'];
    }
    public withProjectId(projectId: string): ImageJobDetailInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobId(jobId: string): ImageJobDetailInfo {
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