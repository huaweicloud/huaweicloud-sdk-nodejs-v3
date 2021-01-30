

export class UpdateLoginProject {
    public enabled: boolean;
    private 'verification_method': string | undefined;
    public constructor(enabled: any, verificationMethod: any) { 
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
    public set verificationMethod(verificationMethod: string | undefined) {
        this['verification_method'] = verificationMethod;
    }
    public get verificationMethod() {
        return this['verification_method'];
    }
}