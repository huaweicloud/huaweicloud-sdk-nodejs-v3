import { SmsTemplateReq } from './SmsTemplateReq';


export class CreateTemplateRequest {
    private 'Content-Type'?: string;
    public body?: SmsTemplateReq;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: SmsTemplateReq): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}