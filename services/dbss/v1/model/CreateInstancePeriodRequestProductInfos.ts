

export class CreateInstancePeriodRequestProductInfos {
    private 'product_id'?: string;
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'product_spec_desc'?: string;
    public constructor(productId?: string, cloudServiceType?: string, resourceType?: string, resourceSpecCode?: string, productSpecDesc?: string) { 
        this['product_id'] = productId;
        this['cloud_service_type'] = cloudServiceType;
        this['resource_type'] = resourceType;
        this['resource_spec_code'] = resourceSpecCode;
        this['product_spec_desc'] = productSpecDesc;
    }
    public withProductId(productId: string): CreateInstancePeriodRequestProductInfos {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withCloudServiceType(cloudServiceType: string): CreateInstancePeriodRequestProductInfos {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): CreateInstancePeriodRequestProductInfos {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): CreateInstancePeriodRequestProductInfos {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withProductSpecDesc(productSpecDesc: string): CreateInstancePeriodRequestProductInfos {
        this['product_spec_desc'] = productSpecDesc;
        return this;
    }
    public set productSpecDesc(productSpecDesc: string  | undefined) {
        this['product_spec_desc'] = productSpecDesc;
    }
    public get productSpecDesc(): string | undefined {
        return this['product_spec_desc'];
    }
}