

export class UpdateLlmConfigReq {
    public name?: string;
    private 'llm_url'?: string;
    private 'api_key'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateLlmConfigReq {
        this['name'] = name;
        return this;
    }
    public withLlmUrl(llmUrl: string): UpdateLlmConfigReq {
        this['llm_url'] = llmUrl;
        return this;
    }
    public set llmUrl(llmUrl: string  | undefined) {
        this['llm_url'] = llmUrl;
    }
    public get llmUrl(): string | undefined {
        return this['llm_url'];
    }
    public withApiKey(apiKey: string): UpdateLlmConfigReq {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
}