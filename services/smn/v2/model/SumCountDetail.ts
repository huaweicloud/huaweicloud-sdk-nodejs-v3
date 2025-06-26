

export class SumCountDetail {
    public sms?: number;
    public constructor(sms?: number) { 
        this['sms'] = sms;
    }
    public withSms(sms: number): SumCountDetail {
        this['sms'] = sms;
        return this;
    }
}