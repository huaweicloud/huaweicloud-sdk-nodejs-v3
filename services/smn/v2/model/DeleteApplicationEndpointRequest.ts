

export class DeleteApplicationEndpointRequest {
    private 'endpoint_urn'?: string;
    public constructor(endpointUrn?: string) { 
        this['endpoint_urn'] = endpointUrn;
    }
    public withEndpointUrn(endpointUrn: string): DeleteApplicationEndpointRequest {
        this['endpoint_urn'] = endpointUrn;
        return this;
    }
    public set endpointUrn(endpointUrn: string  | undefined) {
        this['endpoint_urn'] = endpointUrn;
    }
    public get endpointUrn(): string | undefined {
        return this['endpoint_urn'];
    }
}