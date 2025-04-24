

export class DeleteEndpointRequest {
    private 'endpoint_id'?: string;
    public constructor(endpointId?: string) { 
        this['endpoint_id'] = endpointId;
    }
    public withEndpointId(endpointId: string): DeleteEndpointRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
}