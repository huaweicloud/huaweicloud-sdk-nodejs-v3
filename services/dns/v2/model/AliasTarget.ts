

export class AliasTarget {
    private 'resource_type'?: string | undefined;
    private 'resource_domain_name'?: string | undefined;
    public constructor() { 
    }
    public withResourceType(resourceType: string): AliasTarget {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceDomainName(resourceDomainName: string): AliasTarget {
        this['resource_domain_name'] = resourceDomainName;
        return this;
    }
    public set resourceDomainName(resourceDomainName: string | undefined) {
        this['resource_domain_name'] = resourceDomainName;
    }
    public get resourceDomainName() {
        return this['resource_domain_name'];
    }
}