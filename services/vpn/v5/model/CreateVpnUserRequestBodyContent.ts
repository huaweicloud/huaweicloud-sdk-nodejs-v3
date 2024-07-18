

export class CreateVpnUserRequestBodyContent {
    public name?: string;
    public password?: string;
    public description?: string;
    private 'user_group_id'?: string;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): CreateVpnUserRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): CreateVpnUserRequestBodyContent {
        this['password'] = password;
        return this;
    }
    public withDescription(description: string): CreateVpnUserRequestBodyContent {
        this['description'] = description;
        return this;
    }
    public withUserGroupId(userGroupId: string): CreateVpnUserRequestBodyContent {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
}