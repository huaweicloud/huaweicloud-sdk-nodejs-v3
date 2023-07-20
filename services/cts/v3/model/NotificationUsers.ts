

export class NotificationUsers {
    private 'user_group'?: string;
    private 'user_list'?: Array<string>;
    public constructor(userGroup?: string, userList?: Array<string>) { 
        this['user_group'] = userGroup;
        this['user_list'] = userList;
    }
    public withUserGroup(userGroup: string): NotificationUsers {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withUserList(userList: Array<string>): NotificationUsers {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<string>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<string> | undefined {
        return this['user_list'];
    }
}