

export class MountUser {
    private 'user_id': number | undefined;
    private 'user_group_id': number | undefined;
    public constructor(userId?: any, userGroupId?: any) { 
        this['user_id'] = userId;
        this['user_group_id'] = userGroupId;
    }
    public withUserId(userId: number): MountUser {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withUserGroupId(userGroupId: number): MountUser {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: number | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId() {
        return this['user_group_id'];
    }
}