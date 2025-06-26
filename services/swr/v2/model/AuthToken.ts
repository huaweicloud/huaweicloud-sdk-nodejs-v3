

export class AuthToken {
    private 'created_at'?: string;
    public enable?: boolean;
    private 'expire_date'?: string;
    private 'instance_id'?: string;
    public name?: string;
    private 'token_id'?: string;
    private 'user_id'?: string;
    private 'user_profile'?: string;
    public constructor() { 
    }
    public withCreatedAt(createdAt: string): AuthToken {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withEnable(enable: boolean): AuthToken {
        this['enable'] = enable;
        return this;
    }
    public withExpireDate(expireDate: string): AuthToken {
        this['expire_date'] = expireDate;
        return this;
    }
    public set expireDate(expireDate: string  | undefined) {
        this['expire_date'] = expireDate;
    }
    public get expireDate(): string | undefined {
        return this['expire_date'];
    }
    public withInstanceId(instanceId: string): AuthToken {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): AuthToken {
        this['name'] = name;
        return this;
    }
    public withTokenId(tokenId: string): AuthToken {
        this['token_id'] = tokenId;
        return this;
    }
    public set tokenId(tokenId: string  | undefined) {
        this['token_id'] = tokenId;
    }
    public get tokenId(): string | undefined {
        return this['token_id'];
    }
    public withUserId(userId: string): AuthToken {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserProfile(userProfile: string): AuthToken {
        this['user_profile'] = userProfile;
        return this;
    }
    public set userProfile(userProfile: string  | undefined) {
        this['user_profile'] = userProfile;
    }
    public get userProfile(): string | undefined {
        return this['user_profile'];
    }
}