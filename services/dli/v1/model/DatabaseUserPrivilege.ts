

export class DatabaseUserPrivilege {
    private 'is_admin'?: boolean;
    private 'user_name'?: string;
    public privileges?: Array<string>;
    public constructor() { 
    }
    public withIsAdmin(isAdmin: boolean): DatabaseUserPrivilege {
        this['is_admin'] = isAdmin;
        return this;
    }
    public set isAdmin(isAdmin: boolean  | undefined) {
        this['is_admin'] = isAdmin;
    }
    public get isAdmin(): boolean | undefined {
        return this['is_admin'];
    }
    public withUserName(userName: string): DatabaseUserPrivilege {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPrivileges(privileges: Array<string>): DatabaseUserPrivilege {
        this['privileges'] = privileges;
        return this;
    }
}