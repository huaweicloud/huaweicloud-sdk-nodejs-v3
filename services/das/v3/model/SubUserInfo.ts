

export class SubUserInfo {
    private 'domain_id'?: string;
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): SubUserInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withId(id: string): SubUserInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubUserInfo {
        this['name'] = name;
        return this;
    }
}