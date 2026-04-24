

export class PoliciesDomainControl {
    private 'default_enabled'?: boolean;
    private 'domain_rules'?: string;
    public constructor() { 
    }
    public withDefaultEnabled(defaultEnabled: boolean): PoliciesDomainControl {
        this['default_enabled'] = defaultEnabled;
        return this;
    }
    public set defaultEnabled(defaultEnabled: boolean  | undefined) {
        this['default_enabled'] = defaultEnabled;
    }
    public get defaultEnabled(): boolean | undefined {
        return this['default_enabled'];
    }
    public withDomainRules(domainRules: string): PoliciesDomainControl {
        this['domain_rules'] = domainRules;
        return this;
    }
    public set domainRules(domainRules: string  | undefined) {
        this['domain_rules'] = domainRules;
    }
    public get domainRules(): string | undefined {
        return this['domain_rules'];
    }
}