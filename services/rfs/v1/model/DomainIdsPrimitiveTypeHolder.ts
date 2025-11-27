

export class DomainIdsPrimitiveTypeHolder {
    private 'domain_ids'?: Array<string>;
    public constructor() { 
    }
    public withDomainIds(domainIds: Array<string>): DomainIdsPrimitiveTypeHolder {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
}