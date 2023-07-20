import { GetAccessConfigListRequestBody } from './GetAccessConfigListRequestBody';


export class ListAccessConfigRequest {
    private 'Content-Type'?: string;
    public body?: GetAccessConfigListRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListAccessConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: GetAccessConfigListRequestBody): ListAccessConfigRequest {
        this['body'] = body;
        return this;
    }
}