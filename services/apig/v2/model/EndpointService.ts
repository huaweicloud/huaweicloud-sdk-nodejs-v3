

export class EndpointService {
    private 'service_name'?: string;
    private 'created_at'?: Date;
    public constructor() { 
    }
    public withServiceName(serviceName: string): EndpointService {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withCreatedAt(createdAt: Date): EndpointService {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}