

export class UpdatePluginConfigReq {
    private 'api_key'?: string;
    public constructor() { 
    }
    public withApiKey(apiKey: string): UpdatePluginConfigReq {
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