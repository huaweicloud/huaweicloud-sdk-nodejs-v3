

export class ShowCustomLlmRequest {
    private 'Content-Type'?: string;
    public llmId?: string;
    public constructor(contentType?: string, llmId?: string) { 
        this['Content-Type'] = contentType;
        this['llmId'] = llmId;
    }
    public withContentType(contentType: string): ShowCustomLlmRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLlmId(llmId: string): ShowCustomLlmRequest {
        this['llmId'] = llmId;
        return this;
    }
}