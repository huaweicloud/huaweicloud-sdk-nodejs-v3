

export class RepositoryMember {
    public description?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    public email?: string;
    public enabled?: string;
    public name?: string;
    public role?: number;
    private 'user_id'?: string;
    public constructor() { 
    }
    public withDescription(description: string): RepositoryMember {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): RepositoryMember {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): RepositoryMember {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withEmail(email: string): RepositoryMember {
        this['email'] = email;
        return this;
    }
    public withEnabled(enabled: string): RepositoryMember {
        this['enabled'] = enabled;
        return this;
    }
    public withName(name: string): RepositoryMember {
        this['name'] = name;
        return this;
    }
    public withRole(role: number): RepositoryMember {
        this['role'] = role;
        return this;
    }
    public withUserId(userId: string): RepositoryMember {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}