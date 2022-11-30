

export class KeystoneCheckUserInGroupRequest {
    private 'group_id': string | undefined;
    private 'user_id': string | undefined;
    public constructor(groupId?: any, userId?: any) { 
        this['group_id'] = groupId;
        this['user_id'] = userId;
    }
    public withGroupId(groupId: string): KeystoneCheckUserInGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withUserId(userId: string): KeystoneCheckUserInGroupRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
}