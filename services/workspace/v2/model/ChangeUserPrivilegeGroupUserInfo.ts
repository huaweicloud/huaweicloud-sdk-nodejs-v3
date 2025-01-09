

export class ChangeUserPrivilegeGroupUserInfo {
    private 'user_name'?: string;
    private 'user_privilege_group'?: string;
    public type?: ChangeUserPrivilegeGroupUserInfoTypeEnum | string;
    public constructor(userName?: string, type?: string) { 
        this['user_name'] = userName;
        this['type'] = type;
    }
    public withUserName(userName: string): ChangeUserPrivilegeGroupUserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserPrivilegeGroup(userPrivilegeGroup: string): ChangeUserPrivilegeGroupUserInfo {
        this['user_privilege_group'] = userPrivilegeGroup;
        return this;
    }
    public set userPrivilegeGroup(userPrivilegeGroup: string  | undefined) {
        this['user_privilege_group'] = userPrivilegeGroup;
    }
    public get userPrivilegeGroup(): string | undefined {
        return this['user_privilege_group'];
    }
    public withType(type: ChangeUserPrivilegeGroupUserInfoTypeEnum | string): ChangeUserPrivilegeGroupUserInfo {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeUserPrivilegeGroupUserInfoTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
