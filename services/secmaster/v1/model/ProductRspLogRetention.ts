

export class ProductRspLogRetention {
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'resource_size_measure_id'?: number;
    private 'usage_factor'?: string;
    private 'usage_measure_id'?: number;
    private 'region_id'?: string;
    public constructor() { 
    }
    public withCloudServiceType(cloudServiceType: string): ProductRspLogRetention {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): ProductRspLogRetention {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ProductRspLogRetention {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withResourceSizeMeasureId(resourceSizeMeasureId: number): ProductRspLogRetention {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
        return this;
    }
    public set resourceSizeMeasureId(resourceSizeMeasureId: number  | undefined) {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
    }
    public get resourceSizeMeasureId(): number | undefined {
        return this['resource_size_measure_id'];
    }
    public withUsageFactor(usageFactor: string): ProductRspLogRetention {
        this['usage_factor'] = usageFactor;
        return this;
    }
    public set usageFactor(usageFactor: string  | undefined) {
        this['usage_factor'] = usageFactor;
    }
    public get usageFactor(): string | undefined {
        return this['usage_factor'];
    }
    public withUsageMeasureId(usageMeasureId: number): ProductRspLogRetention {
        this['usage_measure_id'] = usageMeasureId;
        return this;
    }
    public set usageMeasureId(usageMeasureId: number  | undefined) {
        this['usage_measure_id'] = usageMeasureId;
    }
    public get usageMeasureId(): number | undefined {
        return this['usage_measure_id'];
    }
    public withRegionId(regionId: string): ProductRspLogRetention {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}