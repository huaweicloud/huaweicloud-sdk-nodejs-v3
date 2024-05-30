import { InstanceInfoResult } from './InstanceInfoResult';


export class TaskDetailResult {
    private 'instance_info'?: InstanceInfoResult;
    private 'job_id'?: string;
    public name?: string;
    public status?: string;
    public process?: string;
    private 'created_at'?: string;
    private 'ended_at'?: string;
    private 'fail_reason'?: string;
    public constructor() { 
    }
    public withInstanceInfo(instanceInfo: InstanceInfoResult): TaskDetailResult {
        this['instance_info'] = instanceInfo;
        return this;
    }
    public set instanceInfo(instanceInfo: InstanceInfoResult  | undefined) {
        this['instance_info'] = instanceInfo;
    }
    public get instanceInfo(): InstanceInfoResult | undefined {
        return this['instance_info'];
    }
    public withJobId(jobId: string): TaskDetailResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withName(name: string): TaskDetailResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): TaskDetailResult {
        this['status'] = status;
        return this;
    }
    public withProcess(process: string): TaskDetailResult {
        this['process'] = process;
        return this;
    }
    public withCreatedAt(createdAt: string): TaskDetailResult {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withEndedAt(endedAt: string): TaskDetailResult {
        this['ended_at'] = endedAt;
        return this;
    }
    public set endedAt(endedAt: string  | undefined) {
        this['ended_at'] = endedAt;
    }
    public get endedAt(): string | undefined {
        return this['ended_at'];
    }
    public withFailReason(failReason: string): TaskDetailResult {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}