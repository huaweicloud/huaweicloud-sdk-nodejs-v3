

export class TraceResource {
    private 'service_type'?: string;
    public resource?: Array<string>;
    public constructor() { 
    }
    public withServiceType(serviceType: string): TraceResource {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withResource(resource: Array<string>): TraceResource {
        this['resource'] = resource;
        return this;
    }
}