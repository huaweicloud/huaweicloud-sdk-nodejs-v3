

export class UpdateAgencyOption {
    private 'trust_domain_id'?: string;
    private 'trust_domain_name'?: string;
    public description?: string;
    public duration?: string;
    public constructor() { 
    }
    public withTrustDomainId(trustDomainId: string): UpdateAgencyOption {
        this['trust_domain_id'] = trustDomainId;
        return this;
    }
    public set trustDomainId(trustDomainId: string  | undefined) {
        this['trust_domain_id'] = trustDomainId;
    }
    public get trustDomainId(): string | undefined {
        return this['trust_domain_id'];
    }
    public withTrustDomainName(trustDomainName: string): UpdateAgencyOption {
        this['trust_domain_name'] = trustDomainName;
        return this;
    }
    public set trustDomainName(trustDomainName: string  | undefined) {
        this['trust_domain_name'] = trustDomainName;
    }
    public get trustDomainName(): string | undefined {
        return this['trust_domain_name'];
    }
    public withDescription(description: string): UpdateAgencyOption {
        this['description'] = description;
        return this;
    }
    public withDuration(duration: string): UpdateAgencyOption {
        this['duration'] = duration;
        return this;
    }
}