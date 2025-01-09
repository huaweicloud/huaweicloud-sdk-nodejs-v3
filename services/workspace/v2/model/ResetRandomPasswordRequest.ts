

export class ResetRandomPasswordRequest {
    private 'user_id'?: string;
    private 'notification_type'?: string;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): ResetRandomPasswordRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withNotificationType(notificationType: string): ResetRandomPasswordRequest {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: string  | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType(): string | undefined {
        return this['notification_type'];
    }
}