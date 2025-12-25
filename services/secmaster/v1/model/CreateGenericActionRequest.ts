import { GenericActionRequestBody } from './GenericActionRequestBody';


export class CreateGenericActionRequest {
    private 'content-type'?: string;
    public body?: GenericActionRequestBody;
    public constructor(contentType?: string) { 
        this['content-type'] = contentType;
    }
    public withContentType(contentType: string): CreateGenericActionRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withBody(body: GenericActionRequestBody): CreateGenericActionRequest {
        this['body'] = body;
        return this;
    }
}