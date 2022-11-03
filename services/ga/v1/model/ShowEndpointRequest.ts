

export class ShowEndpointRequest {
    private 'endpoint_group_id': string | undefined;
    private 'endpoint_id': string | undefined;
    public constructor(endpointGroupId?: any, endpointId?: any) { 
        this['endpoint_group_id'] = endpointGroupId;
        this['endpoint_id'] = endpointId;
    }
    public withEndpointGroupId(endpointGroupId: string): ShowEndpointRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
    public withEndpointId(endpointId: string): ShowEndpointRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId() {
        return this['endpoint_id'];
    }
}