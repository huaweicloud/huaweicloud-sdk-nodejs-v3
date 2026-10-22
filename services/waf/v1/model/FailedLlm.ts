

export class FailedLlm {
    private 'llm_id'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withLlmId(llmId: string): FailedLlm {
        this['llm_id'] = llmId;
        return this;
    }
    public set llmId(llmId: string  | undefined) {
        this['llm_id'] = llmId;
    }
    public get llmId(): string | undefined {
        return this['llm_id'];
    }
    public withReason(reason: string): FailedLlm {
        this['reason'] = reason;
        return this;
    }
}