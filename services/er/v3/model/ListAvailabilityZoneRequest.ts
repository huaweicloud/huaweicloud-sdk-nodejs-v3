

export class ListAvailabilityZoneRequest {
    private 'instance_id'?: string | undefined;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListAvailabilityZoneRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
}