

export class CreateAgencyOption {
    public name?: string;
    private 'domain_id'?: string;
    private 'trust_domain_id'?: string;
    private 'trust_domain_name'?: string;
    public description?: string;
    public duration?: string;
    public constructor(name?: string, domainId?: string) { 
        this['name'] = name;
        this['domain_id'] = domainId;
    }
    public withName(name: string): CreateAgencyOption {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): CreateAgencyOption {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTrustDomainId(trustDomainId: string): CreateAgencyOption {
        this['trust_domain_id'] = trustDomainId;
        return this;
    }
    public set trustDomainId(trustDomainId: string  | undefined) {
        this['trust_domain_id'] = trustDomainId;
    }
    public get trustDomainId(): string | undefined {
        return this['trust_domain_id'];
    }
    public withTrustDomainName(trustDomainName: string): CreateAgencyOption {
        this['trust_domain_name'] = trustDomainName;
        return this;
    }
    public set trustDomainName(trustDomainName: string  | undefined) {
        this['trust_domain_name'] = trustDomainName;
    }
    public get trustDomainName(): string | undefined {
        return this['trust_domain_name'];
    }
    public withDescription(description: string): CreateAgencyOption {
        this['description'] = description;
        return this;
    }
    public withDuration(duration: string): CreateAgencyOption {
        this['duration'] = duration;
        return this;
    }
}