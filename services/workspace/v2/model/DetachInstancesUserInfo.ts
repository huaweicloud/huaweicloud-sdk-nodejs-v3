

export class DetachInstancesUserInfo {
    private 'user_id'?: string;
    private 'user_name'?: string;
    public domain?: string;
    private 'user_group'?: string;
    public type?: DetachInstancesUserInfoTypeEnum | string;
    public constructor(userName?: string) { 
        this['user_name'] = userName;
    }
    public withUserId(userId: string): DetachInstancesUserInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): DetachInstancesUserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomain(domain: string): DetachInstancesUserInfo {
        this['domain'] = domain;
        return this;
    }
    public withUserGroup(userGroup: string): DetachInstancesUserInfo {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withType(type: DetachInstancesUserInfoTypeEnum | string): DetachInstancesUserInfo {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DetachInstancesUserInfoTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
