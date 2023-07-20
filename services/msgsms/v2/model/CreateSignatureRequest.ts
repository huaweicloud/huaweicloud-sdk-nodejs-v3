import { SmsSignatureReq } from './SmsSignatureReq';


export class CreateSignatureRequest {
    private 'Content-Type'?: string;
    public body?: SmsSignatureReq;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateSignatureRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: SmsSignatureReq): CreateSignatureRequest {
        this['body'] = body;
        return this;
    }
}