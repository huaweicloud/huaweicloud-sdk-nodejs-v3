

export class UpdateSubscriptionRequestBody {
    public remark?: string;
    private 'verification_code'?: string;
    public constructor() { 
    }
    public withRemark(remark: string): UpdateSubscriptionRequestBody {
        this['remark'] = remark;
        return this;
    }
    public withVerificationCode(verificationCode: string): UpdateSubscriptionRequestBody {
        this['verification_code'] = verificationCode;
        return this;
    }
    public set verificationCode(verificationCode: string  | undefined) {
        this['verification_code'] = verificationCode;
    }
    public get verificationCode(): string | undefined {
        return this['verification_code'];
    }
}