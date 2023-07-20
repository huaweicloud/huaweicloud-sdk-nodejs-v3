

export class MountUser {
    private 'user_id'?: string;
    private 'user_group_id'?: string;
    public constructor(userId?: string, userGroupId?: string) { 
        this['user_id'] = userId;
        this['user_group_id'] = userGroupId;
    }
    public withUserId(userId: string): MountUser {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserGroupId(userGroupId: string): MountUser {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
}