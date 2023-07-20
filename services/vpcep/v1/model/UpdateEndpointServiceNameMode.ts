

export class UpdateEndpointServiceNameMode {
    private 'endpoint_service_name'?: string;
    public constructor() { 
    }
    public withEndpointServiceName(endpointServiceName: string): UpdateEndpointServiceNameMode {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
}