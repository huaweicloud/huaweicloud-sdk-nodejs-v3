

export class DomainSetInfoDto {
    private 'domain_name'?: string;
    public description?: string;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): DomainSetInfoDto {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDescription(description: string): DomainSetInfoDto {
        this['description'] = description;
        return this;
    }
}