import { CustomLlmBatchDeleteBody } from './CustomLlmBatchDeleteBody';


export class BatchDeleteCustomLlmRequest {
    private 'Content-Type'?: string;
    public body?: CustomLlmBatchDeleteBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchDeleteCustomLlmRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CustomLlmBatchDeleteBody): BatchDeleteCustomLlmRequest {
        this['body'] = body;
        return this;
    }
}