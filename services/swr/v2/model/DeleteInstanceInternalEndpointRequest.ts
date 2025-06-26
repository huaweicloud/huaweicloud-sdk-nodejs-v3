

export class DeleteInstanceInternalEndpointRequest {
    private 'instance_id'?: string;
    private 'internal_endpoints_id'?: string;
    public constructor(instanceId?: string, internalEndpointsId?: string) { 
        this['instance_id'] = instanceId;
        this['internal_endpoints_id'] = internalEndpointsId;
    }
    public withInstanceId(instanceId: string): DeleteInstanceInternalEndpointRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInternalEndpointsId(internalEndpointsId: string): DeleteInstanceInternalEndpointRequest {
        this['internal_endpoints_id'] = internalEndpointsId;
        return this;
    }
    public set internalEndpointsId(internalEndpointsId: string  | undefined) {
        this['internal_endpoints_id'] = internalEndpointsId;
    }
    public get internalEndpointsId(): string | undefined {
        return this['internal_endpoints_id'];
    }
}