

export class CreateCredentialResult {
    private 'create_time': string | undefined;
    public access: string;
    public secret: string;
    public status: string;
    private 'user_id': string | undefined;
    public description: string;
    public constructor(createTime: any, access: any, secret: any, status: any, userId: any, description: any) { 
        this['create_time'] = createTime;
        this['access'] = access;
        this['secret'] = secret;
        this['status'] = status;
        this['user_id'] = userId;
        this['description'] = description;
    }
    public withCreateTime(createTime: string): CreateCredentialResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withAccess(access: string): CreateCredentialResult {
        this['access'] = access;
        return this;
    }
    public withSecret(secret: string): CreateCredentialResult {
        this['secret'] = secret;
        return this;
    }
    public withStatus(status: string): CreateCredentialResult {
        this['status'] = status;
        return this;
    }
    public withUserId(userId: string): CreateCredentialResult {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withDescription(description: string): CreateCredentialResult {
        this['description'] = description;
        return this;
    }
}