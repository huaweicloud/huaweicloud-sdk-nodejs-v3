import { UserSafeDto } from './UserSafeDto';


export class RepositoryEventAuthorDto {
    public id?: number;
    public name?: string;
    public username?: string;
    public state?: string;
    private 'avatar_url'?: string;
    private 'name_cn'?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    public constructor() { 
    }
    public withId(id: number): RepositoryEventAuthorDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepositoryEventAuthorDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): RepositoryEventAuthorDto {
        this['username'] = username;
        return this;
    }
    public withState(state: string): RepositoryEventAuthorDto {
        this['state'] = state;
        return this;
    }
    public withAvatarUrl(avatarUrl: string): RepositoryEventAuthorDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withNameCn(nameCn: string): RepositoryEventAuthorDto {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withNickName(nickName: string): RepositoryEventAuthorDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): RepositoryEventAuthorDto {
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