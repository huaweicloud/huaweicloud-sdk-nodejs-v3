

export class DbUser {
    private 'user_name'?: string;
    private 'user_permission'?: string;
    public constructor() { 
    }
    public withUserName(userName: string): DbUser {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserPermission(userPermission: string): DbUser {
        this['user_permission'] = userPermission;
        return this;
    }
    public set userPermission(userPermission: string  | undefined) {
        this['user_permission'] = userPermission;
    }
    public get userPermission(): string | undefined {
        return this['user_permission'];
    }
}