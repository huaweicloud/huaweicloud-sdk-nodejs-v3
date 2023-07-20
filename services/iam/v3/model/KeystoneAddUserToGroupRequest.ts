

export class KeystoneAddUserToGroupRequest {
    private 'group_id'?: string;
    private 'user_id'?: string;
    public constructor(groupId?: string, userId?: string) { 
        this['group_id'] = groupId;
        this['user_id'] = userId;
    }
    public withGroupId(groupId: string): KeystoneAddUserToGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withUserId(userId: string): KeystoneAddUserToGroupRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}