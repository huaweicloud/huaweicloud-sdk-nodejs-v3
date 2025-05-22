

export class MemberListV4Members {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'user_num_id'?: number;
    private 'role_id'?: number;
    private 'nick_name'?: string;
    private 'role_name'?: string;
    private 'user_type'?: string;
    public forbidden?: number;
    public constructor() { 
    }
    public withDomainId(domainId: string): MemberListV4Members {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): MemberListV4Members {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUserId(userId: string): MemberListV4Members {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): MemberListV4Members {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserNumId(userNumId: number): MemberListV4Members {
        this['user_num_id'] = userNumId;
        return this;
    }
    public set userNumId(userNumId: number  | undefined) {
        this['user_num_id'] = userNumId;
    }
    public get userNumId(): number | undefined {
        return this['user_num_id'];
    }
    public withRoleId(roleId: number): MemberListV4Members {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withNickName(nickName: string): MemberListV4Members {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withRoleName(roleName: string): MemberListV4Members {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withUserType(userType: string): MemberListV4Members {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
    public withForbidden(forbidden: number): MemberListV4Members {
        this['forbidden'] = forbidden;
        return this;
    }
}