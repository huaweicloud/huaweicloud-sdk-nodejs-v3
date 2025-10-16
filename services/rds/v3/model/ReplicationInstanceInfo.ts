

export class ReplicationInstanceInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'data_vip'?: string;
    public constructor(instanceId?: string, instanceName?: string, dataVip?: string) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['data_vip'] = dataVip;
    }
    public withInstanceId(instanceId: string): ReplicationInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ReplicationInstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDataVip(dataVip: string): ReplicationInstanceInfo {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
}