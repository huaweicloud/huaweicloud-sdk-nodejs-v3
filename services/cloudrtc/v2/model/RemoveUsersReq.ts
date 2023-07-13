

export class RemoveUsersReq {
    private 'user_ids': Array<string> | undefined;
    public constructor(userIds?: any) { 
        this['user_ids'] = userIds;
    }
    public withUserIds(userIds: Array<string>): RemoveUsersReq {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<string> | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds() {
        return this['user_ids'];
    }
}