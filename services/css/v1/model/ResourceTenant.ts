

export class ResourceTenant {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    public type?: string;
    public constructor(domainId?: string, domainName?: string, type?: string) { 
        this['domain_id'] = domainId;
        this['domain_name'] = domainName;
        this['type'] = type;
    }
    public withDomainId(domainId: string): ResourceTenant {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ResourceTenant {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withType(type: string): ResourceTenant {
        this['type'] = type;
        return this;
    }
}