

export class ShowResourceClustersRequest {
    private 'service_type'?: string;
    public constructor() { 
    }
    public withServiceType(serviceType: string): ShowResourceClustersRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
}