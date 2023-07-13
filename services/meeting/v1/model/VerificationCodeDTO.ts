

export class VerificationCodeDTO {
    public contact: string;
    public verificationCode?: string;
    public country?: string;
    public constructor(contact?: any) { 
        this['contact'] = contact;
    }
    public withContact(contact: string): VerificationCodeDTO {
        this['contact'] = contact;
        return this;
    }
    public withVerificationCode(verificationCode: string): VerificationCodeDTO {
        this['verificationCode'] = verificationCode;
        return this;
    }
    public withCountry(country: string): VerificationCodeDTO {
        this['country'] = country;
        return this;
    }
}