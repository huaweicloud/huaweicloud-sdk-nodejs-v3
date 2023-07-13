

export class UpdateEndpointServiceNameMode {
    private 'endpoint_service_name'?: string | undefined;
    public constructor() { 
    }
    public withEndpointServiceName(endpointServiceName: string): UpdateEndpointServiceNameMode {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName() {
        return this['endpoint_service_name'];
    }
}