

export class EndpointConnection {
    private 'endpoint_service_id'?: string;
    private 'endpoint_service_name'?: string;
    private 'marker_id'?: string;
    public id?: string;
    public ip?: string;
    private 'created_time'?: string;
    public constructor() { 
    }
    public withEndpointServiceId(endpointServiceId: string): EndpointConnection {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string  | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId(): string | undefined {
        return this['endpoint_service_id'];
    }
    public withEndpointServiceName(endpointServiceName: string): EndpointConnection {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withMarkerId(markerId: string): EndpointConnection {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: string  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): string | undefined {
        return this['marker_id'];
    }
    public withId(id: string): EndpointConnection {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): EndpointConnection {
        this['ip'] = ip;
        return this;
    }
    public withCreatedTime(createdTime: string): EndpointConnection {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
}