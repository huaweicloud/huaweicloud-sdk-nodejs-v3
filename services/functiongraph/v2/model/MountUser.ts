

export class MountUser {
    private 'user_id'?: number;
    private 'user_group_id'?: number;
    public constructor(userId?: number, userGroupId?: number) { 
        this['user_id'] = userId;
        this['user_group_id'] = userGroupId;
    }
    public withUserId(userId: number): MountUser {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withUserGroupId(userGroupId: number): MountUser {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: number  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): number | undefined {
        return this['user_group_id'];
    }
}