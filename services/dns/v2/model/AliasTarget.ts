

export class AliasTarget {
    private 'resource_type'?: string;
    private 'resource_domain_name'?: string;
    public constructor() { 
    }
    public withResourceType(resourceType: string): AliasTarget {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceDomainName(resourceDomainName: string): AliasTarget {
        this['resource_domain_name'] = resourceDomainName;
        return this;
    }
    public set resourceDomainName(resourceDomainName: string  | undefined) {
        this['resource_domain_name'] = resourceDomainName;
    }
    public get resourceDomainName(): string | undefined {
        return this['resource_domain_name'];
    }
}