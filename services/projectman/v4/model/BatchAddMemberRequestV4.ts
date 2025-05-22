

export class BatchAddMemberRequestV4 {
    private 'role_id'?: number;
    private 'user_id'?: string;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withRoleId(roleId: number): BatchAddMemberRequestV4 {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withUserId(userId: string): BatchAddMemberRequestV4 {
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