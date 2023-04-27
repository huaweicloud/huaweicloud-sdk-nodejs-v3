import { GetHostListRequestBody } from './GetHostListRequestBody';


export class ListHostRequest {
    private 'Content-Type': string | undefined;
    public body?: GetHostListRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: GetHostListRequestBody): ListHostRequest {
        this['body'] = body;
        return this;
    }
}