

export class VerifyDomainOwnerRequestBody {
    private 'verify_type'?: string;
    public constructor() { 
    }
    public withVerifyType(verifyType: string): VerifyDomainOwnerRequestBody {
        this['verify_type'] = verifyType;
        return this;
    }
    public set verifyType(verifyType: string  | undefined) {
        this['verify_type'] = verifyType;
    }
    public get verifyType(): string | undefined {
        return this['verify_type'];
    }
}