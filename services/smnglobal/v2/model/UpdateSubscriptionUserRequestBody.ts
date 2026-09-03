

export class UpdateSubscriptionUserRequestBody {
    public name?: string;
    public group?: Array<string>;
    private 'verification_code'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateSubscriptionUserRequestBody {
        this['name'] = name;
        return this;
    }
    public withGroup(group: Array<string>): UpdateSubscriptionUserRequestBody {
        this['group'] = group;
        return this;
    }
    public withVerificationCode(verificationCode: string): UpdateSubscriptionUserRequestBody {
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