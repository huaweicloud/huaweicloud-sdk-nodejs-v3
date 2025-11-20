

export class IamBpMfaUnconfiguredDetails {
    private 'user_id'?: string;
    private 'user_created_at'?: Date;
    public constructor(userId?: string, userCreatedAt?: Date) { 
        this['user_id'] = userId;
        this['user_created_at'] = userCreatedAt;
    }
    public withUserId(userId: string): IamBpMfaUnconfiguredDetails {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserCreatedAt(userCreatedAt: Date): IamBpMfaUnconfiguredDetails {
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