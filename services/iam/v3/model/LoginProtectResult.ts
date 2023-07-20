

export class LoginProtectResult {
    public enabled?: boolean;
    private 'user_id'?: string;
    private 'verification_method'?: string;
    public constructor(enabled?: boolean, userId?: string, verificationMethod?: string) { 
        this['enabled'] = enabled;
        this['user_id'] = userId;
        this['verification_method'] = verificationMethod;
    }
    public withEnabled(enabled: boolean): LoginProtectResult {
        this['enabled'] = enabled;
        return this;
    }
    public withUserId(userId: string): LoginProtectResult {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withVerificationMethod(verificationMethod: string): LoginProtectResult {
        this['verification_method'] = verificationMethod;
        return this;
    }
    public set verificationMethod(verificationMethod: string  | undefined) {
        this['verification_method'] = verificationMethod;
    }
    public get verificationMethod(): string | undefined {
        return this['verification_method'];
    }
}