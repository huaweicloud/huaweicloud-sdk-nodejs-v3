

export class ShowUserChargeTypeResultMainResourceList {
    public status?: string;
    private 'service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    public constructor() { 
    }
    public withStatus(status: string): ShowUserChargeTypeResultMainResourceList {
        this['status'] = status;
        return this;
    }
    public withServiceType(serviceType: string): ShowUserChargeTypeResultMainResourceList {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withResourceType(resourceType: string): ShowUserChargeTypeResultMainResourceList {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ShowUserChargeTypeResultMainResourceList {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}