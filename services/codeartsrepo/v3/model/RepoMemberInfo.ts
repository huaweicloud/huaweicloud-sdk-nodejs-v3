

export class RepoMemberInfo {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    public id?: string;
    public name?: string;
    public role?: number;
    public constructor(id?: string, name?: string, role?: number) { 
        this['id'] = id;
        this['name'] = name;
        this['role'] = role;
    }
    public withDomainId(domainId: string): RepoMemberInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): RepoMemberInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withId(id: string): RepoMemberInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepoMemberInfo {
        this['name'] = name;
        return this;
    }
    public withRole(role: number): RepoMemberInfo {
        this['role'] = role;
        return this;
    }
}