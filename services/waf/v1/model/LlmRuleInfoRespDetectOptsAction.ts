

export class LlmRuleInfoRespDetectOptsAction {
    public category?: string;
    private 'abort_response_content'?: string;
    public constructor() { 
    }
    public withCategory(category: string): LlmRuleInfoRespDetectOptsAction {
        this['category'] = category;
        return this;
    }
    public withAbortResponseContent(abortResponseContent: string): LlmRuleInfoRespDetectOptsAction {
        this['abort_response_content'] = abortResponseContent;
        return this;
    }
    public set abortResponseContent(abortResponseContent: string  | undefined) {
        this['abort_response_content'] = abortResponseContent;
    }
    public get abortResponseContent(): string | undefined {
        return this['abort_response_content'];
    }
}