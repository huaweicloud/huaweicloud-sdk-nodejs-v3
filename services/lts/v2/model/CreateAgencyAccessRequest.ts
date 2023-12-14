import { PreviewAgencyLogAccessReqListBody } from './PreviewAgencyLogAccessReqListBody';


export class CreateAgencyAccessRequest {
    private 'Content-Type'?: string;
    public body?: PreviewAgencyLogAccessReqListBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAgencyAccessRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: PreviewAgencyLogAccessReqListBody): CreateAgencyAccessRequest {
        this['body'] = body;
        return this;
    }
}