

export class ResourcesFilters {
    private 'account_id'?: string | undefined;
    private 'region_id'?: string | undefined;
    private 'resource_id'?: string | undefined;
    private 'resource_name'?: string | undefined;
    public constructor() { 
    }
    public withAccountId(accountId: string): ResourcesFilters {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId() {
        return this['account_id'];
    }
    public withRegionId(regionId: string): ResourcesFilters {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withResourceId(resourceId: string): ResourcesFilters {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourcesFilters {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
}