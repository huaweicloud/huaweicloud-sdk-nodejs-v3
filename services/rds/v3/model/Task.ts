

export class Task {
    public id?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    private 'order_id'?: string;
    public process?: string;
    private 'fail_reason'?: string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): Task {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Task {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): Task {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): Task {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): Task {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withOrderId(orderId: string): Task {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withProcess(process: string): Task {
        this['process'] = process;
        return this;
    }
    public withFailReason(failReason: string): Task {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withCreateTime(createTime: string): Task {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): Task {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): Task {
        this['status'] = status;
        return this;
    }
}