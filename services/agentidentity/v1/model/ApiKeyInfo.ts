

export class ApiKeyInfo {
    private 'api_key'?: string;
    private 'api_key_name'?: string;
    public constructor(apiKey?: string) { 
        this['api_key'] = apiKey;
    }
    public withApiKey(apiKey: string): ApiKeyInfo {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
    public withApiKeyName(apiKeyName: string): ApiKeyInfo {
        this['api_key_name'] = apiKeyName;
        return this;
    }
    public set apiKeyName(apiKeyName: string  | undefined) {
        this['api_key_name'] = apiKeyName;
    }
    public get apiKeyName(): string | undefined {
        return this['api_key_name'];
    }
}