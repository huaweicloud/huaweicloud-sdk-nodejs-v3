

export class PushRuleDevelopersDto {
    public id?: object;
    private 'user_id'?: object;
    private 'user_name'?: object;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    public constructor() { 
    }
    public withId(id: object): PushRuleDevelopersDto {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: object): PushRuleDevelopersDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: object  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): object | undefined {
        return this['user_id'];
    }
    public withUserName(userName: object): PushRuleDevelopersDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: object  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): object | undefined {
        return this['user_name'];
    }
    public withNickName(nickName: string): PushRuleDevelopersDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): PushRuleDevelopersDto {
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