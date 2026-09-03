

export class ExportInstanceInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    public metrics?: { [key: string]: number; };
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ExportInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ExportInstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): ExportInstanceInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withMetrics(metrics: { [key: string]: number; }): ExportInstanceInfo {
        this['metrics'] = metrics;
        return this;
    }
}