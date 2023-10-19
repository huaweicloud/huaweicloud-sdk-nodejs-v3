

export class DomainSetInfoDto {
    private 'domain_set_id'?: string;
    private 'domain_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withDomainSetId(domainSetId: string): DomainSetInfoDto {
        this['domain_set_id'] = domainSetId;
        return this;
    }
    public set domainSetId(domainSetId: string  | undefined) {
        this['domain_set_id'] = domainSetId;
    }
    public get domainSetId(): string | undefined {
        return this['domain_set_id'];
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