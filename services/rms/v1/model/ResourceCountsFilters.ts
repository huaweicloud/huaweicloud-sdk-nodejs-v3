

export class ResourceCountsFilters {
    private 'account_id'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'region_id'?: string | undefined;
    public constructor() { 
    }
    public withAccountId(accountId: string): ResourceCountsFilters {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId() {
        return this['account_id'];
    }
    public withResourceType(resourceType: string): ResourceCountsFilters {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withRegionId(regionId: string): ResourceCountsFilters {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
}