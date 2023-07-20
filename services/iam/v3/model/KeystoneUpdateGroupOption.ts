

export class KeystoneUpdateGroupOption {
    public description?: string;
    private 'domain_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): KeystoneUpdateGroupOption {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): KeystoneUpdateGroupOption {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneUpdateGroupOption {
        this['name'] = name;
        return this;
    }
}