

export class CreateVpnUser {
    public name?: string;
    public password?: string;
    public description?: string;
    private 'user_group_name'?: string;
    public constructor() { 
    }
    public withName(name: string): CreateVpnUser {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): CreateVpnUser {
        this['password'] = password;
        return this;
    }
    public withDescription(description: string): CreateVpnUser {
        this['description'] = description;
        return this;
    }
    public withUserGroupName(userGroupName: string): CreateVpnUser {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
}