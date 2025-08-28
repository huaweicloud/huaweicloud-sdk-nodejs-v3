

export class CreateLlmConfigReq {
    public name?: string;
    private 'llm_url'?: string;
    private 'api_key'?: string;
    public constructor(name?: string, llmUrl?: string, apiKey?: string) { 
        this['name'] = name;
        this['llm_url'] = llmUrl;
        this['api_key'] = apiKey;
    }
    public withName(name: string): CreateLlmConfigReq {
        this['name'] = name;
        return this;
    }
    public withLlmUrl(llmUrl: string): CreateLlmConfigReq {
        this['llm_url'] = llmUrl;
        return this;
    }
    public set llmUrl(llmUrl: string  | undefined) {
        this['llm_url'] = llmUrl;
    }
    public get llmUrl(): string | undefined {
        return this['llm_url'];
    }
    public withApiKey(apiKey: string): CreateLlmConfigReq {
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