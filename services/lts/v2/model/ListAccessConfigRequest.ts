import { GetAccessConfigListRequestBody } from './GetAccessConfigListRequestBody';


export class ListAccessConfigRequest {
    private 'Content-Type': string | undefined;
    public body?: GetAccessConfigListRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListAccessConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: GetAccessConfigListRequestBody): ListAccessConfigRequest {
        this['body'] = body;
        return this;
    }
}