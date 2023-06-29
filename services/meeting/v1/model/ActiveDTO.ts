

export class ActiveDTO {
    public smsNumber?: string;
    public country?: string;
    public emailAddr?: string;
    public constructor() { 
    }
    public withSmsNumber(smsNumber: string): ActiveDTO {
        this['smsNumber'] = smsNumber;
        return this;
    }
    public withCountry(country: string): ActiveDTO {
        this['country'] = country;
        return this;
    }
    public withEmailAddr(emailAddr: string): ActiveDTO {
        this['emailAddr'] = emailAddr;
        return this;
    }
}