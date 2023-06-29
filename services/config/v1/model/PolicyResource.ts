

export class PolicyResource {
    private 'resource_id'?: string | undefined;
    private 'resource_name'?: string | undefined;
    private 'resource_provider'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'region_id'?: string | undefined;
    private 'domain_id'?: string | undefined;
    public constructor() { 
    }
    public withResourceId(resourceId: string): PolicyResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): PolicyResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceProvider(resourceProvider: string): PolicyResource {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider() {
        return this['resource_provider'];
    }
    public withResourceType(resourceType: string): PolicyResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withRegionId(regionId: string): PolicyResource {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withDomainId(domainId: string): PolicyResource {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
}