

export class AiApiKeyCreate {
    private 'ai_api_key'?: string;
    public alias?: string;
    public constructor() { 
    }
    public withAiApiKey(aiApiKey: string): AiApiKeyCreate {
        this['ai_api_key'] = aiApiKey;
        return this;
    }
    public set aiApiKey(aiApiKey: string  | undefined) {
        this['ai_api_key'] = aiApiKey;
    }
    public get aiApiKey(): string | undefined {
        return this['ai_api_key'];
    }
    public withAlias(alias: string): AiApiKeyCreate {
        this['alias'] = alias;
        return this;
    }
}