

export class LoginProfile {
    private 'user_id'?: string;
    private 'password_reset_required'?: boolean;
    private 'password_expires_at'?: Date;
    private 'created_at'?: Date;
    public constructor(userId?: string, passwordResetRequired?: boolean, createdAt?: Date) { 
        this['user_id'] = userId;
        this['password_reset_required'] = passwordResetRequired;
        this['created_at'] = createdAt;
    }
    public withUserId(userId: string): LoginProfile {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withPasswordResetRequired(passwordResetRequired: boolean): LoginProfile {
        this['password_reset_required'] = passwordResetRequired;
        return this;
    }
    public set passwordResetRequired(passwordResetRequired: boolean  | undefined) {
        this['password_reset_required'] = passwordResetRequired;
    }
    public get passwordResetRequired(): boolean | undefined {
        return this['password_reset_required'];
    }
    public withPasswordExpiresAt(passwordExpiresAt: Date): LoginProfile {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: Date  | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt(): Date | undefined {
        return this['password_expires_at'];
    }
    public withCreatedAt(createdAt: Date): LoginProfile {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}