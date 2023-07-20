import { SmsAppAddReq } from './SmsAppAddReq';


export class CreateAppRequest {
    private 'Content-Type'?: string;
    public body?: SmsAppAddReq;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: SmsAppAddReq): CreateAppRequest {
        this['body'] = body;
        return this;
    }
}