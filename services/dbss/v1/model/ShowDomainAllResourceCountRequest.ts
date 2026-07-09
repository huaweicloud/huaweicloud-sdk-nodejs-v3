

export class ShowDomainAllResourceCountRequest {
    private 'domain_id'?: string;
    private 'resource_type'?: string;
    private 'region_id'?: string;
    public constructor(domainId?: string, resourceType?: string, regionId?: string) { 
        this['domain_id'] = domainId;
        this['resource_type'] = resourceType;
        this['region_id'] = regionId;
    }
    public withDomainId(domainId: string): ShowDomainAllResourceCountRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withResourceType(resourceType: string): ShowDomainAllResourceCountRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withRegionId(regionId: string): ShowDomainAllResourceCountRequest {
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