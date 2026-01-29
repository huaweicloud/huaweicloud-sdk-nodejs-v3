

export class ShowApplicableInstancesRequest {
    private 'config_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ShowApplicableInstancesRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withOffset(offset: number): ShowApplicableInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowApplicableInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withInstanceName(instanceName: string): ShowApplicableInstancesRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): ShowApplicableInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}