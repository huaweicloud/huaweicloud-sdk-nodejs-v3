

export class ShowEndpointGroupRequest {
    private 'endpoint_group_id': string | undefined;
    public constructor(endpointGroupId?: any) { 
        this['endpoint_group_id'] = endpointGroupId;
    }
    public withEndpointGroupId(endpointGroupId: string): ShowEndpointGroupRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
}