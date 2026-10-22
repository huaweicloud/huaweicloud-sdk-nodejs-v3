

export class AiguardCustomLlmUpdateBody {
    public name?: string;
    public description?: string;
    private 'model_name'?: string;
    public protocol?: string;
    public url?: string;
    private 'api_key'?: string;
    public constructor() { 
    }
    public withName(name: string): AiguardCustomLlmUpdateBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiguardCustomLlmUpdateBody {
        this['description'] = description;
        return this;
    }
    public withModelName(modelName: string): AiguardCustomLlmUpdateBody {
        this['model_name'] = modelName;
        return this;
    }
    public set modelName(modelName: string  | undefined) {
        this['model_name'] = modelName;
    }
    public get modelName(): string | undefined {
        return this['model_name'];
    }
    public withProtocol(protocol: string): AiguardCustomLlmUpdateBody {
        this['protocol'] = protocol;
        return this;
    }
    public withUrl(url: string): AiguardCustomLlmUpdateBody {
        this['url'] = url;
        return this;
    }
    public withApiKey(apiKey: string): AiguardCustomLlmUpdateBody {
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