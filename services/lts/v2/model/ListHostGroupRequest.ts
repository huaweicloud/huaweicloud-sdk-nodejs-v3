import { GetHostGroupListRequestBody } from './GetHostGroupListRequestBody';


export class ListHostGroupRequest {
    private 'Content-Type'?: string;
    public body?: GetHostGroupListRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListHostGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: GetHostGroupListRequestBody): ListHostGroupRequest {
        this['body'] = body;
        return this;
    }
}