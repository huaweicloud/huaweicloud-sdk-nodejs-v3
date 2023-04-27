import { UpdateAccessConfigRequestBody } from './UpdateAccessConfigRequestBody';


export class UpdateAccessConfigRequest {
    private 'Content-Type': string | undefined;
    public body?: UpdateAccessConfigRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UpdateAccessConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: UpdateAccessConfigRequestBody): UpdateAccessConfigRequest {
        this['body'] = body;
        return this;
    }
}