import { AiguardCustomLlmBody } from './AiguardCustomLlmBody';


export class CreateCustomLlmRequest {
    private 'Content-Type'?: string;
    public body?: AiguardCustomLlmBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateCustomLlmRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AiguardCustomLlmBody): CreateCustomLlmRequest {
        this['body'] = body;
        return this;
    }
}