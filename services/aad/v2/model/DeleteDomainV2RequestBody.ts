

export class DeleteDomainV2RequestBody {
    private 'domain_id'?: Array<string>;
    public constructor(domainId?: Array<string>) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: Array<string>): DeleteDomainV2RequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: Array<string>  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): Array<string> | undefined {
        return this['domain_id'];
    }
}