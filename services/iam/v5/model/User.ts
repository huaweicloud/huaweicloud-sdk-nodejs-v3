

export class User {
    public description?: string;
    private 'user_name'?: string;
    private 'is_root_user'?: boolean;
    private 'created_at'?: Date;
    private 'user_id'?: string;
    public urn?: string;
    public enabled?: boolean;
    public constructor(userName?: string, isRootUser?: boolean, createdAt?: Date, userId?: string, urn?: string, enabled?: boolean) { 
        this['user_name'] = userName;
        this['is_root_user'] = isRootUser;
        this['created_at'] = createdAt;
        this['user_id'] = userId;
        this['urn'] = urn;
        this['enabled'] = enabled;
    }
    public withDescription(description: string): User {
        this['description'] = description;
        return this;
    }
    public withUserName(userName: string): User {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withIsRootUser(isRootUser: boolean): User {
        this['is_root_user'] = isRootUser;
        return this;
    }
    public set isRootUser(isRootUser: boolean  | undefined) {
        this['is_root_user'] = isRootUser;
    }
    public get isRootUser(): boolean | undefined {
        return this['is_root_user'];
    }
    public withCreatedAt(createdAt: Date): User {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUserId(userId: string): User {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUrn(urn: string): User {
        this['urn'] = urn;
        return this;
    }
    public withEnabled(enabled: boolean): User {
        this['enabled'] = enabled;
        return this;
    }
}