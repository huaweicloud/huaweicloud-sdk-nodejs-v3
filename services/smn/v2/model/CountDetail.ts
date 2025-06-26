

export class CountDetail {
    public sms?: number;
    public constructor(sms?: number) { 
        this['sms'] = sms;
    }
    public withSms(sms: number): CountDetail {
        this['sms'] = sms;
        return this;
    }
}