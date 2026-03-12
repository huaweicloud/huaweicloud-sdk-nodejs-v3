

export class ProductInfo {
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    public constructor(cloudServiceType?: string, resourceType?: string, resourceSpecCode?: string) { 
        this['cloud_service_type'] = cloudServiceType;
        this['resource_type'] = resourceType;
        this['resource_spec_code'] = resourceSpecCode;
    }
    public withCloudServiceType(cloudServiceType: string): ProductInfo {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): ProductInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ProductInfo {
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