

export class UpdateCredentialResult {
    private 'user_id'?: string;
    public access?: string;
    public status?: string;
    private 'create_time'?: string;
    public description?: string;
    public constructor(userId?: string, access?: string, status?: string, createTime?: string, description?: string) { 
        this['user_id'] = userId;
        this['access'] = access;
        this['status'] = status;
        this['create_time'] = createTime;
        this['description'] = description;
    }
    public withUserId(userId: string): UpdateCredentialResult {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withAccess(access: string): UpdateCredentialResult {
        this['access'] = access;
        return this;
    }
    public withStatus(status: string): UpdateCredentialResult {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): UpdateCredentialResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): UpdateCredentialResult {
        this['description'] = description;
        return this;
    }
}