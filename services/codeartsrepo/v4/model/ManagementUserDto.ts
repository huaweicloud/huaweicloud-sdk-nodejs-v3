

export class ManagementUserDto {
    public name?: string;
    public username?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    public constructor() { 
    }
    public withName(name: string): ManagementUserDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): ManagementUserDto {
        this['username'] = username;
        return this;
    }
    public withNickName(nickName: string): ManagementUserDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): ManagementUserDto {
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