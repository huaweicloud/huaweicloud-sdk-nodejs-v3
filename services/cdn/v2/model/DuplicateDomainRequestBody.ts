

export class DuplicateDomainRequestBody {
    private 'reference_domain_name'?: string;
    private 'domain_name'?: string;
    public constructor(referenceDomainName?: string, domainName?: string) { 
        this['reference_domain_name'] = referenceDomainName;
        this['domain_name'] = domainName;
    }
    public withReferenceDomainName(referenceDomainName: string): DuplicateDomainRequestBody {
        this['reference_domain_name'] = referenceDomainName;
        return this;
    }
    public set referenceDomainName(referenceDomainName: string  | undefined) {
        this['reference_domain_name'] = referenceDomainName;
    }
    public get referenceDomainName(): string | undefined {
        return this['reference_domain_name'];
    }
    public withDomainName(domainName: string): DuplicateDomainRequestBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
}