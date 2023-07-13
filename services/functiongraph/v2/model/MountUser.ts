

export class MountUser {
    private 'user_id': string | undefined;
    private 'user_group_id': string | undefined;
    public constructor(userId?: any, userGroupId?: any) { 
        this['user_id'] = userId;
        this['user_group_id'] = userGroupId;
    }
    public withUserId(userId: string): MountUser {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withUserGroupId(userGroupId: string): MountUser {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId() {
        return this['user_group_id'];
    }
}