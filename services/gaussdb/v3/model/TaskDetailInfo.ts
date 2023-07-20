

export class TaskDetailInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    private 'job_id'?: string;
    private 'order_id'?: string;
    private 'job_name'?: string;
    public status?: string;
    public process?: string;
    private 'created_time'?: string;
    private 'ended_time'?: string;
    private 'fail_reason'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): TaskDetailInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): TaskDetailInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): TaskDetailInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withJobId(jobId: string): TaskDetailInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): TaskDetailInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withJobName(jobName: string): TaskDetailInfo {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withStatus(status: string): TaskDetailInfo {
        this['status'] = status;
        return this;
    }
    public withProcess(process: string): TaskDetailInfo {
        this['process'] = process;
        return this;
    }
    public withCreatedTime(createdTime: string): TaskDetailInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withEndedTime(endedTime: string): TaskDetailInfo {
        this['ended_time'] = endedTime;
        return this;
    }
    public set endedTime(endedTime: string  | undefined) {
        this['ended_time'] = endedTime;
    }
    public get endedTime(): string | undefined {
        return this['ended_time'];
    }
    public withFailReason(failReason: string): TaskDetailInfo {
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