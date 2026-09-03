

export class ListSubscriptionUserResponseSmsEndpointInfo {
    public endpoint?: string;
    private 'verification_code_enabled'?: boolean;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): ListSubscriptionUserResponseSmsEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withVerificationCodeEnabled(verificationCodeEnabled: boolean): ListSubscriptionUserResponseSmsEndpointInfo {
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