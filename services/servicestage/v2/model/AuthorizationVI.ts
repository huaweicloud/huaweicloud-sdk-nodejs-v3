

export class AuthorizationVI {
    public name?: string;
    private 'repo_type'?: string;
    private 'repo_host'?: string;
    private 'repo_home'?: string;
    private 'repo_user'?: string;
    public avartar?: string;
    private 'token_type'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public status?: number;
    public constructor(name?: string, repoType?: string, repoHost?: string, repoHome?: string, repoUser?: string, avartar?: string, tokenType?: string, createTime?: number, updateTime?: number, status?: number) { 
        this['name'] = name;
        this['repo_type'] = repoType;
        this['repo_host'] = repoHost;
        this['repo_home'] = repoHome;
        this['repo_user'] = repoUser;
        this['avartar'] = avartar;
        this['token_type'] = tokenType;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
        this['status'] = status;
    }
    public withName(name: string): AuthorizationVI {
        this['name'] = name;
        return this;
    }
    public withRepoType(repoType: string): AuthorizationVI {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: string  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): string | undefined {
        return this['repo_type'];
    }
    public withRepoHost(repoHost: string): AuthorizationVI {
        this['repo_host'] = repoHost;
        return this;
    }
    public set repoHost(repoHost: string  | undefined) {
        this['repo_host'] = repoHost;
    }
    public get repoHost(): string | undefined {
        return this['repo_host'];
    }
    public withRepoHome(repoHome: string): AuthorizationVI {
        this['repo_home'] = repoHome;
        return this;
    }
    public set repoHome(repoHome: string  | undefined) {
        this['repo_home'] = repoHome;
    }
    public get repoHome(): string | undefined {
        return this['repo_home'];
    }
    public withRepoUser(repoUser: string): AuthorizationVI {
        this['repo_user'] = repoUser;
        return this;
    }
    public set repoUser(repoUser: string  | undefined) {
        this['repo_user'] = repoUser;
    }
    public get repoUser(): string | undefined {
        return this['repo_user'];
    }
    public withAvartar(avartar: string): AuthorizationVI {
        this['avartar'] = avartar;
        return this;
    }
    public withTokenType(tokenType: string): AuthorizationVI {
        this['token_type'] = tokenType;
        return this;
    }
    public set tokenType(tokenType: string  | undefined) {
        this['token_type'] = tokenType;
    }
    public get tokenType(): string | undefined {
        return this['token_type'];
    }
    public withCreateTime(createTime: number): AuthorizationVI {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AuthorizationVI {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withStatus(status: number): AuthorizationVI {
        this['status'] = status;
        return this;
    }
}