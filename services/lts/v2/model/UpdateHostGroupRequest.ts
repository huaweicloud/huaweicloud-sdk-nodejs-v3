import { UpdateHostGroupRequestBody } from './UpdateHostGroupRequestBody';


export class UpdateHostGroupRequest {
    private 'Content-Type': string | undefined;
    public body?: UpdateHostGroupRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UpdateHostGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: UpdateHostGroupRequestBody): UpdateHostGroupRequest {
        this['body'] = body;
        return this;
    }
}