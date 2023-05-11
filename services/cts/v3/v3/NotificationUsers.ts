

export class NotificationUsers {
    private 'user_group': string | undefined;
    private 'user_list': Array<string> | undefined;
    public constructor(userGroup?: any, userList?: any) { 
        this['user_group'] = userGroup;
        this['user_list'] = userList;
    }
    public withUserGroup(userGroup: string): NotificationUsers {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup() {
        return this['user_group'];
    }
    public withUserList(userList: Array<string>): NotificationUsers {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<string> | undefined) {
        this['user_list'] = userList;
    }
    public get userList() {
        return this['user_list'];
    }
}