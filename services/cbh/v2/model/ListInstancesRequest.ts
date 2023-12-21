

export class ListInstancesRequest {
    private 'instance_id'?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: number): ListInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
}