import { SmsSignatureReq } from './SmsSignatureReq';


export class UpdateSignatureRequest {
    private 'Content-Type': string | undefined;
    public id: string;
    public body?: SmsSignatureReq;
    public constructor(contentType?: any, id?: any) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): UpdateSignatureRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withId(id: string): UpdateSignatureRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: SmsSignatureReq): UpdateSignatureRequest {
        this['body'] = body;
        return this;
    }
}