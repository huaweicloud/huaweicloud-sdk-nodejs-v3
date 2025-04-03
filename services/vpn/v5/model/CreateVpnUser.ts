

export class CreateVpnUser {
    public name?: string;
    public password?: string;
    public description?: string;
    private 'user_group_name'?: string;
    private 'static_ip'?: string;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
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
    public withStaticIp(staticIp: string): CreateVpnUser {
        this['static_ip'] = staticIp;
        return this;
    }
    public set staticIp(staticIp: string  | undefined) {
        this['static_ip'] = staticIp;
    }
    public get staticIp(): string | undefined {
        return this['static_ip'];
    }
}