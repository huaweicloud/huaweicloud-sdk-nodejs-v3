

export class OuNameInfo {
    public id?: string;
    private 'domain_id'?: string;
    public domain?: string;
    private 'ou_name'?: string;
    private 'ou_dn'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): OuNameInfo {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): OuNameInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomain(domain: string): OuNameInfo {
        this['domain'] = domain;
        return this;
    }
    public withOuName(ouName: string): OuNameInfo {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withOuDn(ouDn: string): OuNameInfo {
        this['ou_dn'] = ouDn;
        return this;
    }
    public set ouDn(ouDn: string  | undefined) {
        this['ou_dn'] = ouDn;
    }
    public get ouDn(): string | undefined {
        return this['ou_dn'];
    }
    public withDescription(description: string): OuNameInfo {
        this['description'] = description;
        return this;
    }
}