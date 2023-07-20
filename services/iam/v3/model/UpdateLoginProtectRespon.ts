

export class UpdateLoginProtectRespon {
    private 'user_id'?: string;
    public enabled?: boolean;
    private 'verification_method'?: string;
    public constructor(userId?: string, enabled?: boolean, verificationMethod?: string) { 
        this['user_id'] = userId;
        this['enabled'] = enabled;
        this['verification_method'] = verificationMethod;
    }
    public withUserId(userId: string): UpdateLoginProtectRespon {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withEnabled(enabled: boolean): UpdateLoginProtectRespon {
        this['enabled'] = enabled;
        return this;
    }
    public withVerificationMethod(verificationMethod: string): UpdateLoginProtectRespon {
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