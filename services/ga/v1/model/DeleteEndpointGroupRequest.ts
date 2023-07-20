

export class DeleteEndpointGroupRequest {
    private 'endpoint_group_id'?: string;
    public constructor(endpointGroupId?: string) { 
        this['endpoint_group_id'] = endpointGroupId;
    }
    public withEndpointGroupId(endpointGroupId: string): DeleteEndpointGroupRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string  | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId(): string | undefined {
        return this['endpoint_group_id'];
    }
}