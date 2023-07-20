

export class ProductInfo {
    public id?: string;
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'resource_size'?: number;
    private 'usage_factor'?: string;
    private 'usage_value'?: number;
    private 'usage_measure_id'?: number;
    private 'resource_size_measure_id'?: number;
    public constructor() { 
    }
    public withId(id: string): ProductInfo {
        this['id'] = id;
        return this;
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
    public withResourceSize(resourceSize: number): ProductInfo {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withUsageFactor(usageFactor: string): ProductInfo {
        this['usage_factor'] = usageFactor;
        return this;
    }
    public set usageFactor(usageFactor: string  | undefined) {
        this['usage_factor'] = usageFactor;
    }
    public get usageFactor(): string | undefined {
        return this['usage_factor'];
    }
    public withUsageValue(usageValue: number): ProductInfo {
        this['usage_value'] = usageValue;
        return this;
    }
    public set usageValue(usageValue: number  | undefined) {
        this['usage_value'] = usageValue;
    }
    public get usageValue(): number | undefined {
        return this['usage_value'];
    }
    public withUsageMeasureId(usageMeasureId: number): ProductInfo {
        this['usage_measure_id'] = usageMeasureId;
        return this;
    }
    public set usageMeasureId(usageMeasureId: number  | undefined) {
        this['usage_measure_id'] = usageMeasureId;
    }
    public get usageMeasureId(): number | undefined {
        return this['usage_measure_id'];
    }
    public withResourceSizeMeasureId(resourceSizeMeasureId: number): ProductInfo {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
        return this;
    }
    public set resourceSizeMeasureId(resourceSizeMeasureId: number  | undefined) {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
    }
    public get resourceSizeMeasureId(): number | undefined {
        return this['resource_size_measure_id'];
    }
}