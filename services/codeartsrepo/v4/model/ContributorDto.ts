

export class ContributorDto {
    public name?: string;
    public email?: string;
    public commits?: number;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withName(name: string): ContributorDto {
        this['name'] = name;
        return this;
    }
    public withEmail(email: string): ContributorDto {
        this['email'] = email;
        return this;
    }
    public withCommits(commits: number): ContributorDto {
        this['commits'] = commits;
        return this;
    }
    public withNickName(nickName: string): ContributorDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): ContributorDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withUserName(userName: string): ContributorDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}