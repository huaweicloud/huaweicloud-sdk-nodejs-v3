

export class UpdateCredentialResult {
    private 'user_id': string | undefined;
    public access: string;
    public status: string;
    private 'create_time': string | undefined;
    public description: string;
    public constructor(userId: any, access: any, status: any, createTime: any, description: any) { 
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
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
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
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withDescription(description: string): UpdateCredentialResult {
        this['description'] = description;
        return this;
    }
}