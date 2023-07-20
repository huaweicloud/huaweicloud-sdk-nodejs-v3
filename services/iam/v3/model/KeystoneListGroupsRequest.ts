

export class KeystoneListGroupsRequest {
    private 'domain_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): KeystoneListGroupsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneListGroupsRequest {
        this['name'] = name;
        return this;
    }
}