

export class RepoUserPrivilegeV5 {
    private 'user_id'?: string;
    private 'domain_id'?: string;
    private 'user_name'?: string;
    private 'repo_id'?: string;
    public privilege?: string;
    private 'role_id'?: string;
    private 'role_name'?: string;
    public constructor() { 
    }
    public withUserId(userId: string): RepoUserPrivilegeV5 {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withDomainId(domainId: string): RepoUserPrivilegeV5 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withUserName(userName: string): RepoUserPrivilegeV5 {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withRepoId(repoId: string): RepoUserPrivilegeV5 {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withPrivilege(privilege: string): RepoUserPrivilegeV5 {
        this['privilege'] = privilege;
        return this;
    }
    public withRoleId(roleId: string): RepoUserPrivilegeV5 {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): RepoUserPrivilegeV5 {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
}