

export class KeystoneCreateGroupOption {
    public description?: string;
    private 'domain_id'?: string | undefined;
    public name: string;
    public constructor(name: any) { 
        this['name'] = name;
    }
    public withDescription(description: string): KeystoneCreateGroupOption {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): KeystoneCreateGroupOption {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneCreateGroupOption {
        this['name'] = name;
        return this;
    }
}