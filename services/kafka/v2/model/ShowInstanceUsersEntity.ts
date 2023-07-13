

export class ShowInstanceUsersEntity {
    private 'user_name'?: string | undefined;
    public role?: string;
    private 'default_app'?: boolean | undefined;
    private 'created_time'?: number | undefined;
    public constructor() { 
    }
    public withUserName(userName: string): ShowInstanceUsersEntity {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withRole(role: string): ShowInstanceUsersEntity {
        this['role'] = role;
        return this;
    }
    public withDefaultApp(defaultApp: boolean): ShowInstanceUsersEntity {
        this['default_app'] = defaultApp;
        return this;
    }
    public set defaultApp(defaultApp: boolean | undefined) {
        this['default_app'] = defaultApp;
    }
    public get defaultApp() {
        return this['default_app'];
    }
    public withCreatedTime(createdTime: number): ShowInstanceUsersEntity {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
}