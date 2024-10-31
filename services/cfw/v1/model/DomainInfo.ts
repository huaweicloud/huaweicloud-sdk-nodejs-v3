

export class DomainInfo {
    private 'domain_address_id'?: string;
    private 'domain_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withDomainAddressId(domainAddressId: string): DomainInfo {
        this['domain_address_id'] = domainAddressId;
        return this;
    }
    public set domainAddressId(domainAddressId: string  | undefined) {
        this['domain_address_id'] = domainAddressId;
    }
    public get domainAddressId(): string | undefined {
        return this['domain_address_id'];
    }
    public withDomainName(domainName: string): DomainInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDescription(description: string): DomainInfo {
        this['description'] = description;
        return this;
    }
}