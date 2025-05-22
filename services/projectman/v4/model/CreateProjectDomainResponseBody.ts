

export class CreateProjectDomainResponseBody {
    private 'domain_name'?: string;
    private 'domain_id'?: string;
    public constructor() { 
    }
    public withDomainName(domainName: string): CreateProjectDomainResponseBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainId(domainId: string): CreateProjectDomainResponseBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}