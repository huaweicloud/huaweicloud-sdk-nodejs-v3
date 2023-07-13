import { SmsTemplateReq } from './SmsTemplateReq';


export class UpdateTemplateRequest {
    private 'Content-Type': string | undefined;
    public id: string;
    public body?: SmsTemplateReq;
    public constructor(contentType?: any, id?: any) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): UpdateTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withId(id: string): UpdateTemplateRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: SmsTemplateReq): UpdateTemplateRequest {
        this['body'] = body;
        return this;
    }
}