import { AiguardCustomLlmUpdateBody } from './AiguardCustomLlmUpdateBody';


export class UpdateCustomLlmRequest {
    private 'Content-Type'?: string;
    public llmId?: string;
    public body?: AiguardCustomLlmUpdateBody;
    public constructor(contentType?: string, llmId?: string) { 
        this['Content-Type'] = contentType;
        this['llmId'] = llmId;
    }
    public withContentType(contentType: string): UpdateCustomLlmRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLlmId(llmId: string): UpdateCustomLlmRequest {
        this['llmId'] = llmId;
        return this;
    }
    public withBody(body: AiguardCustomLlmUpdateBody): UpdateCustomLlmRequest {
        this['body'] = body;
        return this;
    }
}