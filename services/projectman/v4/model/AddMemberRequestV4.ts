

export class AddMemberRequestV4 {
    private 'domain_name'?: string;
    private 'domain_id'?: string;
    private 'role_id'?: number;
    private 'user_id'?: string;
    public constructor(domainId?: string, userId?: string) { 
        this['domain_id'] = domainId;
        this['user_id'] = userId;
    }
    public withDomainName(domainName: string): AddMemberRequestV4 {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainId(domainId: string): AddMemberRequestV4 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRoleId(roleId: number): AddMemberRequestV4 {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withUserId(userId: string): AddMemberRequestV4 {
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