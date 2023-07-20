

export class ListMonitoredObjectsOfInstanceRequest {
    private 'instance_id'?: string;
    private 'dim_name'?: string;
    public constructor(instanceId?: string, dimName?: string) { 
        this['instance_id'] = instanceId;
        this['dim_name'] = dimName;
    }
    public withInstanceId(instanceId: string): ListMonitoredObjectsOfInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDimName(dimName: string): ListMonitoredObjectsOfInstanceRequest {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: string  | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName(): string | undefined {
        return this['dim_name'];
    }
}