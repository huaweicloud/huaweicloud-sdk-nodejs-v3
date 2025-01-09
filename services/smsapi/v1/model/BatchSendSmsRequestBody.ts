

export class BatchSendSmsRequestBody {
    public from?: string;
    public to?: string;
    public templateId?: string;
    public templateParas?: string;
    public statusCallback?: string;
    public extend?: string;
    public signature?: string;
    public constructor() { 
    }
    public withFrom(from: string): BatchSendSmsRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): BatchSendSmsRequestBody {
        this['to'] = to;
        return this;
    }
    public withTemplateId(templateId: string): BatchSendSmsRequestBody {
        this['templateId'] = templateId;
        return this;
    }
    public withTemplateParas(templateParas: string): BatchSendSmsRequestBody {
        this['templateParas'] = templateParas;
        return this;
    }
    public withStatusCallback(statusCallback: string): BatchSendSmsRequestBody {
        this['statusCallback'] = statusCallback;
        return this;
    }
    public withExtend(extend: string): BatchSendSmsRequestBody {
        this['extend'] = extend;
        return this;
    }
    public withSignature(signature: string): BatchSendSmsRequestBody {
        this['signature'] = signature;
        return this;
    }
}