

export class UpdateLoginProject {
    public enabled?: boolean;
    private 'verification_method'?: string;
    public constructor(enabled?: boolean, verificationMethod?: string) { 
        this['enabled'] = enabled;
        this['verification_method'] = verificationMethod;
    }
    public withEnabled(enabled: boolean): UpdateLoginProject {
        this['enabled'] = enabled;
        return this;
    }
    public withVerificationMethod(verificationMethod: string): UpdateLoginProject {
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