

export class CompletionUsage {
    private 'completion_tokens'?: number;
    private 'prompt_tokens'?: number;
    private 'total_tokens'?: number;
    public constructor(completionTokens?: number, promptTokens?: number, totalTokens?: number) { 
        this['completion_tokens'] = completionTokens;
        this['prompt_tokens'] = promptTokens;
        this['total_tokens'] = totalTokens;
    }
    public withCompletionTokens(completionTokens: number): CompletionUsage {
        this['completion_tokens'] = completionTokens;
        return this;
    }
    public set completionTokens(completionTokens: number  | undefined) {
        this['completion_tokens'] = completionTokens;
    }
    public get completionTokens(): number | undefined {
        return this['completion_tokens'];
    }
    public withPromptTokens(promptTokens: number): CompletionUsage {
        this['prompt_tokens'] = promptTokens;
        return this;
    }
    public set promptTokens(promptTokens: number  | undefined) {
        this['prompt_tokens'] = promptTokens;
    }
    public get promptTokens(): number | undefined {
        return this['prompt_tokens'];
    }
    public withTotalTokens(totalTokens: number): CompletionUsage {
        this['total_tokens'] = totalTokens;
        return this;
    }
    public set totalTokens(totalTokens: number  | undefined) {
        this['total_tokens'] = totalTokens;
    }
    public get totalTokens(): number | undefined {
        return this['total_tokens'];
    }
}