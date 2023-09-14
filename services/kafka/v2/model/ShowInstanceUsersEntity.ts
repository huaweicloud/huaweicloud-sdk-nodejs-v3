

export class ShowInstanceUsersEntity {
    private 'user_name'?: string;
    private 'user_desc'?: string;
    public role?: string;
    private 'default_app'?: boolean;
    private 'created_time'?: number;
    public constructor() { 
    }
    public withUserName(userName: string): ShowInstanceUsersEntity {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserDesc(userDesc: string): ShowInstanceUsersEntity {
        this['user_desc'] = userDesc;
        return this;
    }
    public set userDesc(userDesc: string  | undefined) {
        this['user_desc'] = userDesc;
    }
    public get userDesc(): string | undefined {
        return this['user_desc'];
    }
    public withRole(role: string): ShowInstanceUsersEntity {
        this['role'] = role;
        return this;
    }
    public withDefaultApp(defaultApp: boolean): ShowInstanceUsersEntity {
        this['default_app'] = defaultApp;
        return this;
    }
    public set defaultApp(defaultApp: boolean  | undefined) {
        this['default_app'] = defaultApp;
    }
    public get defaultApp(): boolean | undefined {
        return this['default_app'];
    }
    public withCreatedTime(createdTime: number): ShowInstanceUsersEntity {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
}