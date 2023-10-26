

export class ProductInfoBean {
    private 'all_resource_names'?: Array<string>;
    private 'cloud_service_type'?: string;
    private 'display_id'?: string;
    private 'product_id'?: string;
    private 'product_spec_desc'?: string;
    private 'resource_name'?: string;
    private 'resource_size'?: number;
    private 'resource_size_measure_id'?: number;
    private 'resource_spec_code'?: string;
    private 'resource_type'?: string;
    private 'usage_factor'?: string;
    private 'usage_measure_id'?: number;
    private 'usage_value'?: number;
    public constructor(cloudServiceType?: string, productId?: string, resourceSize?: number, resourceSizeMeasureId?: number, resourceSpecCode?: string, resourceType?: string) { 
        this['cloud_service_type'] = cloudServiceType;
        this['product_id'] = productId;
        this['resource_size'] = resourceSize;
        this['resource_size_measure_id'] = resourceSizeMeasureId;
        this['resource_spec_code'] = resourceSpecCode;
        this['resource_type'] = resourceType;
    }
    public withAllResourceNames(allResourceNames: Array<string>): ProductInfoBean {
        this['all_resource_names'] = allResourceNames;
        return this;
    }
    public set allResourceNames(allResourceNames: Array<string>  | undefined) {
        this['all_resource_names'] = allResourceNames;
    }
    public get allResourceNames(): Array<string> | undefined {
        return this['all_resource_names'];
    }
    public withCloudServiceType(cloudServiceType: string): ProductInfoBean {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withDisplayId(displayId: string): ProductInfoBean {
        this['display_id'] = displayId;
        return this;
    }
    public set displayId(displayId: string  | undefined) {
        this['display_id'] = displayId;
    }
    public get displayId(): string | undefined {
        return this['display_id'];
    }
    public withProductId(productId: string): ProductInfoBean {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductSpecDesc(productSpecDesc: string): ProductInfoBean {
        this['product_spec_desc'] = productSpecDesc;
        return this;
    }
    public set productSpecDesc(productSpecDesc: string  | undefined) {
        this['product_spec_desc'] = productSpecDesc;
    }
    public get productSpecDesc(): string | undefined {
        return this['product_spec_desc'];
    }
    public withResourceName(resourceName: string): ProductInfoBean {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceSize(resourceSize: number): ProductInfoBean {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withResourceSizeMeasureId(resourceSizeMeasureId: number): ProductInfoBean {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
        return this;
    }
    public set resourceSizeMeasureId(resourceSizeMeasureId: number  | undefined) {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
    }
    public get resourceSizeMeasureId(): number | undefined {
        return this['resource_size_measure_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ProductInfoBean {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withResourceType(resourceType: string): ProductInfoBean {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withUsageFactor(usageFactor: string): ProductInfoBean {
        this['usage_factor'] = usageFactor;
        return this;
    }
    public set usageFactor(usageFactor: string  | undefined) {
        this['usage_factor'] = usageFactor;
    }
    public get usageFactor(): string | undefined {
        return this['usage_factor'];
    }
    public withUsageMeasureId(usageMeasureId: number): ProductInfoBean {
        this['usage_measure_id'] = usageMeasureId;
        return this;
    }
    public set usageMeasureId(usageMeasureId: number  | undefined) {
        this['usage_measure_id'] = usageMeasureId;
    }
    public get usageMeasureId(): number | undefined {
        return this['usage_measure_id'];
    }
    public withUsageValue(usageValue: number): ProductInfoBean {
        this['usage_value'] = usageValue;
        return this;
    }
    public set usageValue(usageValue: number  | undefined) {
        this['usage_value'] = usageValue;
    }
    public get usageValue(): number | undefined {
        return this['usage_value'];
    }
}