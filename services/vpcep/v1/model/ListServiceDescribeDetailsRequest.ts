

export class ListServiceDescribeDetailsRequest {
    private 'Content-Type'?: string;
    private 'endpoint_service_name'?: string;
    public id?: string;
    public constructor() { 
    }
    public withContentType(contentType: string): ListServiceDescribeDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEndpointServiceName(endpointServiceName: string): ListServiceDescribeDetailsRequest {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withId(id: string): ListServiceDescribeDetailsRequest {
        this['id'] = id;
        return this;
    }
}