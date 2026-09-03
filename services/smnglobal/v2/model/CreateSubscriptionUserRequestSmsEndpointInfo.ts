

export class CreateSubscriptionUserRequestSmsEndpointInfo {
    public endpoint?: string;
    private 'verification_code_enabled'?: boolean;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestSmsEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withVerificationCodeEnabled(verificationCodeEnabled: boolean): CreateSubscriptionUserRequestSmsEndpointInfo {
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