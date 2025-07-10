import { JobEntities } from './JobEntities';


export class JobDetailInfo {
    public id?: string;
    private 'job_type'?: string;
    public entities?: JobEntities;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'error_code'?: string;
    private 'fail_reason'?: string;
    public host?: string;
    private 'project_id'?: string;
    private 'job_id'?: string;
    public process?: number;
    private 'attach_user'?: string;
    public entity?: string;
    private 'ip_address'?: string;
    public constructor() { 
    }
    public withId(id: string): JobDetailInfo {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: string): JobDetailInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withEntities(entities: JobEntities): JobDetailInfo {
        this['entities'] = entities;
        return this;
    }
    public withBeginTime(beginTime: string): JobDetailInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): JobDetailInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): JobDetailInfo {
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
    public withFailReason(failReason: string): JobDetailInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withHost(host: string): JobDetailInfo {
        this['host'] = host;
        return this;
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
    public withProcess(process: number): JobDetailInfo {
        this['process'] = process;
        return this;
    }
    public withAttachUser(attachUser: string): JobDetailInfo {
        this['attach_user'] = attachUser;
        return this;
    }
    public set attachUser(attachUser: string  | undefined) {
        this['attach_user'] = attachUser;
    }
    public get attachUser(): string | undefined {
        return this['attach_user'];
    }
    public withEntity(entity: string): JobDetailInfo {
        this['entity'] = entity;
        return this;
    }
    public withIpAddress(ipAddress: string): JobDetailInfo {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
}