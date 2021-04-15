

export class LoginProtectResult {
    public enabled: boolean;
    private 'user_id': string | undefined;
    private 'verification_method': string | undefined;
    public constructor(enabled?: any, userId?: any, verificationMethod?: any) { 
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
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withVerificationMethod(verificationMethod: string): LoginProtectResult {
        this['verification_method'] = verificationMethod;
        return this;
    }
    public set verificationMethod(verificationMethod: string | undefined) {
        this['verification_method'] = verificationMethod;
    }
    public get verificationMethod() {
        return this['verification_method'];
    }
}