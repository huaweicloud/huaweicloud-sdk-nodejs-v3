

export class SmsContent {
    public to?: Array<string>;
    public templateId?: string;
    public templateParas?: Array<string>;
    public signature?: string;
    public constructor() { 
    }
    public withTo(to: Array<string>): SmsContent {
        this['to'] = to;
        return this;
    }
    public withTemplateId(templateId: string): SmsContent {
        this['templateId'] = templateId;
        return this;
    }
    public withTemplateParas(templateParas: Array<string>): SmsContent {
        this['templateParas'] = templateParas;
        return this;
    }
    public withSignature(signature: string): SmsContent {
        this['signature'] = signature;
        return this;
    }
}