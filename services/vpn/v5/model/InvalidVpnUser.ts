

export class InvalidVpnUser {
    public name?: string;
    public description?: string;
    private 'user_group_name'?: string;
    public cause?: string;
    public constructor() { 
    }
    public withName(name: string): InvalidVpnUser {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InvalidVpnUser {
        this['description'] = description;
        return this;
    }
    public withUserGroupName(userGroupName: string): InvalidVpnUser {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withCause(cause: string): InvalidVpnUser {
        this['cause'] = cause;
        return this;
    }
}