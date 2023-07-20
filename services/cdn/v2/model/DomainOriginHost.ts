

export class DomainOriginHost {
    private 'domain_id'?: string;
    private 'origin_host_type'?: string;
    private 'customize_domain'?: string;
    public constructor(originHostType?: string) { 
        this['origin_host_type'] = originHostType;
    }
    public withDomainId(domainId: string): DomainOriginHost {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withOriginHostType(originHostType: string): DomainOriginHost {
        this['origin_host_type'] = originHostType;
        return this;
    }
    public set originHostType(originHostType: string  | undefined) {
        this['origin_host_type'] = originHostType;
    }
    public get originHostType(): string | undefined {
        return this['origin_host_type'];
    }
    public withCustomizeDomain(customizeDomain: string): DomainOriginHost {
        this['customize_domain'] = customizeDomain;
        return this;
    }
    public set customizeDomain(customizeDomain: string  | undefined) {
        this['customize_domain'] = customizeDomain;
    }
    public get customizeDomain(): string | undefined {
        return this['customize_domain'];
    }
}