

export class ResourceTypesSummary {
    private 'region_id'?: string;
    private 'resource_type'?: string;
    public constructor(regionId?: string, resourceType?: string) { 
        this['region_id'] = regionId;
        this['resource_type'] = resourceType;
    }
    public withRegionId(regionId: string): ResourceTypesSummary {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceType(resourceType: string): ResourceTypesSummary {
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