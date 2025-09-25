

export class LlmRuleInfoPromptDetectOptsActionResponse {
    private 'status_code'?: number;
    private 'content_type'?: string;
    public content?: string;
    public constructor() { 
    }
    public withStatusCode(statusCode: number): LlmRuleInfoPromptDetectOptsActionResponse {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: number  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): number | undefined {
        return this['status_code'];
    }
    public withContentType(contentType: string): LlmRuleInfoPromptDetectOptsActionResponse {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content_type'];
    }
    public withContent(content: string): LlmRuleInfoPromptDetectOptsActionResponse {
        this['content'] = content;
        return this;
    }
}