

export class ServiceSecurityConfig {
    private 'user_id'?: number;
    private 'group_id'?: number;
    public constructor() { 
    }
    public withUserId(userId: number): ServiceSecurityConfig {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withGroupId(groupId: number): ServiceSecurityConfig {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
}