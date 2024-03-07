

export class AuthorizationPrivilege {
    private 'object'?: string;
    private 'is_admin'?: boolean;
    private 'user_name'?: string;
    public privileges?: Array<string>;
    public constructor() { 
    }
    public withModelObject(modelObject: string): AuthorizationPrivilege {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withIsAdmin(isAdmin: boolean): AuthorizationPrivilege {
        this['is_admin'] = isAdmin;
        return this;
    }
    public set isAdmin(isAdmin: boolean  | undefined) {
        this['is_admin'] = isAdmin;
    }
    public get isAdmin(): boolean | undefined {
        return this['is_admin'];
    }
    public withUserName(userName: string): AuthorizationPrivilege {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPrivileges(privileges: Array<string>): AuthorizationPrivilege {
        this['privileges'] = privileges;
        return this;
    }
}