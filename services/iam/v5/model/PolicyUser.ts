

export class PolicyUser {
    private 'user_id'?: string;
    private 'attached_at'?: Date;
    public constructor(userId?: string, attachedAt?: Date) { 
        this['user_id'] = userId;
        this['attached_at'] = attachedAt;
    }
    public withUserId(userId: string): PolicyUser {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withAttachedAt(attachedAt: Date): PolicyUser {
        this['attached_at'] = attachedAt;
        return this;
    }
    public set attachedAt(attachedAt: Date  | undefined) {
        this['attached_at'] = attachedAt;
    }
    public get attachedAt(): Date | undefined {
        return this['attached_at'];
    }
}