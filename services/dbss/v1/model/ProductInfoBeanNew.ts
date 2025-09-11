

export class ProductInfoBeanNew {
    private 'all_resource_names'?: Array<string>;
    private 'cloud_service_type'?: string;
    private 'display_id'?: string;
    private 'product_id'?: string;
    private 'product_spec_desc'?: string;
    private 'resource_name'?: string;
    private 'resource_spec_code'?: string;
    private 'resource_type'?: string;
    public constructor() { 
    }
    public withAllResourceNames(allResourceNames: Array<string>): ProductInfoBeanNew {
        this['all_resource_names'] = allResourceNames;
        return this;
    }
    public set allResourceNames(allResourceNames: Array<string>  | undefined) {
        this['all_resource_names'] = allResourceNames;
    }
    public get allResourceNames(): Array<string> | undefined {
        return this['all_resource_names'];
    }
    public withCloudServiceType(cloudServiceType: string): ProductInfoBeanNew {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withDisplayId(displayId: string): ProductInfoBeanNew {
        this['display_id'] = displayId;
        return this;
    }
    public set displayId(displayId: string  | undefined) {
        this['display_id'] = displayId;
    }
    public get displayId(): string | undefined {
        return this['display_id'];
    }
    public withProductId(productId: string): ProductInfoBeanNew {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductSpecDesc(productSpecDesc: string): ProductInfoBeanNew {
        this['product_spec_desc'] = productSpecDesc;
        return this;
    }
    public set productSpecDesc(productSpecDesc: string  | undefined) {
        this['product_spec_desc'] = productSpecDesc;
    }
    public get productSpecDesc(): string | undefined {
        return this['product_spec_desc'];
    }
    public withResourceName(resourceName: string): ProductInfoBeanNew {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ProductInfoBeanNew {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withResourceType(resourceType: string): ProductInfoBeanNew {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}