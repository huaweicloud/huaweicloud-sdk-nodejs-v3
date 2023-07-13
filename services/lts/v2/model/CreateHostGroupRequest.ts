import { CreateHostGroupRequestBody } from './CreateHostGroupRequestBody';


export class CreateHostGroupRequest {
    private 'Content-Type': string | undefined;
    public body?: CreateHostGroupRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateHostGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateHostGroupRequestBody): CreateHostGroupRequest {
        this['body'] = body;
        return this;
    }
}