

export class ModelInfo {
    public id?: string;
    public name?: string;
    private 'provider_model_id'?: string;
    public input?: Array<string>;
    public reasoning?: boolean;
    private 'update_time'?: string;
    private 'context_window'?: number;
    private 'max_tokens'?: number;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): ModelInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ModelInfo {
        this['name'] = name;
        return this;
    }
    public withProviderModelId(providerModelId: string): ModelInfo {
        this['provider_model_id'] = providerModelId;
        return this;
    }
    public set providerModelId(providerModelId: string  | undefined) {
        this['provider_model_id'] = providerModelId;
    }
    public get providerModelId(): string | undefined {
        return this['provider_model_id'];
    }
    public withInput(input: Array<string>): ModelInfo {
        this['input'] = input;
        return this;
    }
    public withReasoning(reasoning: boolean): ModelInfo {
        this['reasoning'] = reasoning;
        return this;
    }
    public withUpdateTime(updateTime: string): ModelInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withContextWindow(contextWindow: number): ModelInfo {
        this['context_window'] = contextWindow;
        return this;
    }
    public set contextWindow(contextWindow: number  | undefined) {
        this['context_window'] = contextWindow;
    }
    public get contextWindow(): number | undefined {
        return this['context_window'];
    }
    public withMaxTokens(maxTokens: number): ModelInfo {
        this['max_tokens'] = maxTokens;
        return this;
    }
    public set maxTokens(maxTokens: number  | undefined) {
        this['max_tokens'] = maxTokens;
    }
    public get maxTokens(): number | undefined {
        return this['max_tokens'];
    }
    public withType(type: string): ModelInfo {
        this['type'] = type;
        return this;
    }
}