

export class InstanceHealthReport {
    private 'task_id'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public constructor(taskId?: string, instanceId?: string, instanceName?: string, startAt?: number, endAt?: number) { 
        this['task_id'] = taskId;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withTaskId(taskId: string): InstanceHealthReport {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): InstanceHealthReport {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstanceHealthReport {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStartAt(startAt: number): InstanceHealthReport {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): InstanceHealthReport {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
}