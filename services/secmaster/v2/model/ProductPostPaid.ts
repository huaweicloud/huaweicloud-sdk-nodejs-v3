

export class ProductPostPaid {
    public id?: string;
    private 'product_id'?: string;
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'usage_measure_id'?: ProductPostPaidUsageMeasureIdEnum | number;
    private 'usage_value'?: number;
    private 'resource_size'?: number;
    private 'usage_factor'?: string;
    private 'resource_id'?: string;
    public constructor(id?: string, productId?: string, cloudServiceType?: string, resourceType?: string, resourceSpecCode?: string, usageMeasureId?: number, usageValue?: number, resourceSize?: number, usageFactor?: string) { 
        this['id'] = id;
        this['product_id'] = productId;
        this['cloud_service_type'] = cloudServiceType;
        this['resource_type'] = resourceType;
        this['resource_spec_code'] = resourceSpecCode;
        this['usage_measure_id'] = usageMeasureId;
        this['usage_value'] = usageValue;
        this['resource_size'] = resourceSize;
        this['usage_factor'] = usageFactor;
    }
    public withId(id: string): ProductPostPaid {
        this['id'] = id;
        return this;
    }
    public withProductId(productId: string): ProductPostPaid {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withCloudServiceType(cloudServiceType: string): ProductPostPaid {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): ProductPostPaid {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ProductPostPaid {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withUsageMeasureId(usageMeasureId: ProductPostPaidUsageMeasureIdEnum | number): ProductPostPaid {
        this['usage_measure_id'] = usageMeasureId;
        return this;
    }
    public set usageMeasureId(usageMeasureId: ProductPostPaidUsageMeasureIdEnum | number  | undefined) {
        this['usage_measure_id'] = usageMeasureId;
    }
    public get usageMeasureId(): ProductPostPaidUsageMeasureIdEnum | number | undefined {
        return this['usage_measure_id'];
    }
    public withUsageValue(usageValue: number): ProductPostPaid {
        this['usage_value'] = usageValue;
        return this;
    }
    public set usageValue(usageValue: number  | undefined) {
        this['usage_value'] = usageValue;
    }
    public get usageValue(): number | undefined {
        return this['usage_value'];
    }
    public withResourceSize(resourceSize: number): ProductPostPaid {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withUsageFactor(usageFactor: string): ProductPostPaid {
        this['usage_factor'] = usageFactor;
        return this;
    }
    public set usageFactor(usageFactor: string  | undefined) {
        this['usage_factor'] = usageFactor;
    }
    public get usageFactor(): string | undefined {
        return this['usage_factor'];
    }
    public withResourceId(resourceId: string): ProductPostPaid {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProductPostPaidUsageMeasureIdEnum {
    NUMBER_4 = 4,
    NUMBER_10 = 10,
    NUMBER_11 = 11
}
