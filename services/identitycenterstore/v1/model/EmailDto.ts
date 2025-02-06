

export class EmailDto {
    public primary?: boolean;
    public type?: string;
    public value?: string;
    private 'verification_status'?: EmailDtoVerificationStatusEnum | string;
    public constructor(primary?: boolean, type?: string, value?: string) { 
        this['primary'] = primary;
        this['type'] = type;
        this['value'] = value;
    }
    public withPrimary(primary: boolean): EmailDto {
        this['primary'] = primary;
        return this;
    }
    public withType(type: string): EmailDto {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): EmailDto {
        this['value'] = value;
        return this;
    }
    public withVerificationStatus(verificationStatus: EmailDtoVerificationStatusEnum | string): EmailDto {
        this['verification_status'] = verificationStatus;
        return this;
    }
    public set verificationStatus(verificationStatus: EmailDtoVerificationStatusEnum | string  | undefined) {
        this['verification_status'] = verificationStatus;
    }
    public get verificationStatus(): EmailDtoVerificationStatusEnum | string | undefined {
        return this['verification_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EmailDtoVerificationStatusEnum {
    NOT_VERIFIED = 'NOT_VERIFIED',
    VERIFIED = 'VERIFIED'
}
