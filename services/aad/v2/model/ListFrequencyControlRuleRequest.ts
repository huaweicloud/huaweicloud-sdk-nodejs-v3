

export class ListFrequencyControlRuleRequest {
    private 'domain_name'?: string;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): ListFrequencyControlRuleRequest {
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