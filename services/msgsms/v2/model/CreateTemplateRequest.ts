import { SmsTemplateReq } from './SmsTemplateReq';


export class CreateTemplateRequest {
    private 'Content-Type': string | undefined;
    public body?: SmsTemplateReq;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: SmsTemplateReq): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}