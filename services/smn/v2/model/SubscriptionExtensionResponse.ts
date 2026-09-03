

export class SubscriptionExtensionResponse {
    private 'verification_code_enabled'?: boolean;
    public constructor() { 
    }
    public withVerificationCodeEnabled(verificationCodeEnabled: boolean): SubscriptionExtensionResponse {
        this['verification_code_enabled'] = verificationCodeEnabled;
        return this;
    }
    public set verificationCodeEnabled(verificationCodeEnabled: boolean  | undefined) {
        this['verification_code_enabled'] = verificationCodeEnabled;
    }
    public get verificationCodeEnabled(): boolean | undefined {
        return this['verification_code_enabled'];
    }
}