

export class IamBpAccessApiWithPasswordDetails {
    private 'user_id'?: string;
    private 'last_access_api_with_pwd_at'?: Date;
    private 'user_created_at'?: Date;
    public constructor(userId?: string, lastAccessApiWithPwdAt?: Date, userCreatedAt?: Date) { 
        this['user_id'] = userId;
        this['last_access_api_with_pwd_at'] = lastAccessApiWithPwdAt;
        this['user_created_at'] = userCreatedAt;
    }
    public withUserId(userId: string): IamBpAccessApiWithPasswordDetails {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withLastAccessApiWithPwdAt(lastAccessApiWithPwdAt: Date): IamBpAccessApiWithPasswordDetails {
        this['last_access_api_with_pwd_at'] = lastAccessApiWithPwdAt;
        return this;
    }
    public set lastAccessApiWithPwdAt(lastAccessApiWithPwdAt: Date  | undefined) {
        this['last_access_api_with_pwd_at'] = lastAccessApiWithPwdAt;
    }
    public get lastAccessApiWithPwdAt(): Date | undefined {
        return this['last_access_api_with_pwd_at'];
    }
    public withUserCreatedAt(userCreatedAt: Date): IamBpAccessApiWithPasswordDetails {
        this['user_created_at'] = userCreatedAt;
        return this;
    }
    public set userCreatedAt(userCreatedAt: Date  | undefined) {
        this['user_created_at'] = userCreatedAt;
    }
    public get userCreatedAt(): Date | undefined {
        return this['user_created_at'];
    }
}