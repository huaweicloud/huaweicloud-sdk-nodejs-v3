

export class InstanceDetailStatusInfo {
    public status?: string;
    private 'task_status'?: string;
    private 'create_instance_status'?: string;
    private 'instance_status'?: string;
    private 'instance_description'?: string;
    private 'fail_reason'?: string;
    public constructor(status?: string, taskStatus?: string, createInstanceStatus?: string, instanceStatus?: string, instanceDescription?: string, failReason?: string) { 
        this['status'] = status;
        this['task_status'] = taskStatus;
        this['create_instance_status'] = createInstanceStatus;
        this['instance_status'] = instanceStatus;
        this['instance_description'] = instanceDescription;
        this['fail_reason'] = failReason;
    }
    public withStatus(status: string): InstanceDetailStatusInfo {
        this['status'] = status;
        return this;
    }
    public withTaskStatus(taskStatus: string): InstanceDetailStatusInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withCreateInstanceStatus(createInstanceStatus: string): InstanceDetailStatusInfo {
        this['create_instance_status'] = createInstanceStatus;
        return this;
    }
    public set createInstanceStatus(createInstanceStatus: string  | undefined) {
        this['create_instance_status'] = createInstanceStatus;
    }
    public get createInstanceStatus(): string | undefined {
        return this['create_instance_status'];
    }
    public withInstanceStatus(instanceStatus: string): InstanceDetailStatusInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withInstanceDescription(instanceDescription: string): InstanceDetailStatusInfo {
        this['instance_description'] = instanceDescription;
        return this;
    }
    public set instanceDescription(instanceDescription: string  | undefined) {
        this['instance_description'] = instanceDescription;
    }
    public get instanceDescription(): string | undefined {
        return this['instance_description'];
    }
    public withFailReason(failReason: string): InstanceDetailStatusInfo {
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