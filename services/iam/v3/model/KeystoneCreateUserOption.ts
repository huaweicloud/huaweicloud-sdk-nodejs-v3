

export class KeystoneCreateUserOption {
    public name: string;
    private 'domain_id'?: string | undefined;
    public password?: string;
    public enabled?: boolean;
    public description?: string;
    public constructor(name: any) { 
        this['name'] = name;
    }
    public withName(name: string): KeystoneCreateUserOption {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): KeystoneCreateUserOption {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withPassword(password: string): KeystoneCreateUserOption {
        this['password'] = password;
        return this;
    }
    public withEnabled(enabled: boolean): KeystoneCreateUserOption {
        this['enabled'] = enabled;
        return this;
    }
    public withDescription(description: string): KeystoneCreateUserOption {
        this['description'] = description;
        return this;
    }
}