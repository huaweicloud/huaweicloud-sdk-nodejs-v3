

export class SetDatabaseUserPrivilegeReqV3 {
    private 'all_users'?: boolean;
    private 'user_name'?: string;
    public readonly?: boolean;
    public constructor(allUsers?: boolean, readonly?: boolean) { 
        this['all_users'] = allUsers;
        this['readonly'] = readonly;
    }
    public withAllUsers(allUsers: boolean): SetDatabaseUserPrivilegeReqV3 {
        this['all_users'] = allUsers;
        return this;
    }
    public set allUsers(allUsers: boolean  | undefined) {
        this['all_users'] = allUsers;
    }
    public get allUsers(): boolean | undefined {
        return this['all_users'];
    }
    public withUserName(userName: string): SetDatabaseUserPrivilegeReqV3 {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withReadonly(readonly: boolean): SetDatabaseUserPrivilegeReqV3 {
        this['readonly'] = readonly;
        return this;
    }
}