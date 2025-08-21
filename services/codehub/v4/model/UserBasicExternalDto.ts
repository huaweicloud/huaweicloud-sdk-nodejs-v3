

export class UserBasicExternalDto {
    public id?: number;
    public name?: string;
    public username?: string;
    public state?: string;
    private 'avatar_url'?: string;
    private 'web_url'?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    public constructor() { 
    }
    public withId(id: number): UserBasicExternalDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UserBasicExternalDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): UserBasicExternalDto {
        this['username'] = username;
        return this;
    }
    public withState(state: string): UserBasicExternalDto {
        this['state'] = state;
        return this;
    }
    public withAvatarUrl(avatarUrl: string): UserBasicExternalDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withWebUrl(webUrl: string): UserBasicExternalDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withNickName(nickName: string): UserBasicExternalDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): UserBasicExternalDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
}