import { SmsContent } from './SmsContent';


export class BatchSendDiffSmsRequestBody {
    public from?: string;
    public statusCallback?: string;
    public smsContent?: Array<SmsContent>;
    public extend?: string;
    public constructor() { 
    }
    public withFrom(from: string): BatchSendDiffSmsRequestBody {
        this['from'] = from;
        return this;
    }
    public withStatusCallback(statusCallback: string): BatchSendDiffSmsRequestBody {
        this['statusCallback'] = statusCallback;
        return this;
    }
    public withSmsContent(smsContent: Array<SmsContent>): BatchSendDiffSmsRequestBody {
        this['smsContent'] = smsContent;
        return this;
    }
    public withExtend(extend: string): BatchSendDiffSmsRequestBody {
        this['extend'] = extend;
        return this;
    }
}