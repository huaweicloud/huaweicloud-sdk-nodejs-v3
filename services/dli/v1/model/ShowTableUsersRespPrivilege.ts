

export class ShowTableUsersRespPrivilege {
    private 'is_admin'?: boolean;
    private 'object'?: string;
    public privileges?: Array<string>;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withIsAdmin(isAdmin: boolean): ShowTableUsersRespPrivilege {
        this['is_admin'] = isAdmin;
        return this;
    }
    public set isAdmin(isAdmin: boolean  | undefined) {
        this['is_admin'] = isAdmin;
    }
    public get isAdmin(): boolean | undefined {
        return this['is_admin'];
    }
    public withModelObject(modelObject: string): ShowTableUsersRespPrivilege {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withPrivileges(privileges: Array<string>): ShowTableUsersRespPrivilege {
        this['privileges'] = privileges;
        return this;
    }
    public withUserName(userName: string): ShowTableUsersRespPrivilege {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}