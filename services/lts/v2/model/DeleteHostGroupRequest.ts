import { DeleteHostGroupRequestBody } from './DeleteHostGroupRequestBody';


export class DeleteHostGroupRequest {
    private 'Content-Type'?: string;
    public body?: DeleteHostGroupRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): DeleteHostGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DeleteHostGroupRequestBody): DeleteHostGroupRequest {
        this['body'] = body;
        return this;
    }
}