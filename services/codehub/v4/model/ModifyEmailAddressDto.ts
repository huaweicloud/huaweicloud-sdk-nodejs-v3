

export class ModifyEmailAddressDto {
    public email?: string;
    private 'verify_code'?: string;
    public constructor() { 
    }
    public withEmail(email: string): ModifyEmailAddressDto {
        this['email'] = email;
        return this;
    }
    public withVerifyCode(verifyCode: string): ModifyEmailAddressDto {
        this['verify_code'] = verifyCode;
        return this;
    }
    public set verifyCode(verifyCode: string  | undefined) {
        this['verify_code'] = verifyCode;
    }
    public get verifyCode(): string | undefined {
        return this['verify_code'];
    }
}