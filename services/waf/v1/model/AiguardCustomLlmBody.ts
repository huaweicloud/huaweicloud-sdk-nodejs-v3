

export class AiguardCustomLlmBody {
    public name?: string;
    public description?: string;
    private 'model_name'?: string;
    public protocol?: string;
    public url?: string;
    private 'api_key'?: string;
    public constructor(name?: string, modelName?: string, protocol?: string, url?: string, apiKey?: string) { 
        this['name'] = name;
        this['model_name'] = modelName;
        this['protocol'] = protocol;
        this['url'] = url;
        this['api_key'] = apiKey;
    }
    public withName(name: string): AiguardCustomLlmBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiguardCustomLlmBody {
        this['description'] = description;
        return this;
    }
    public withModelName(modelName: string): AiguardCustomLlmBody {
        this['model_name'] = modelName;
        return this;
    }
    public set modelName(modelName: string  | undefined) {
        this['model_name'] = modelName;
    }
    public get modelName(): string | undefined {
        return this['model_name'];
    }
    public withProtocol(protocol: string): AiguardCustomLlmBody {
        this['protocol'] = protocol;
        return this;
    }
    public withUrl(url: string): AiguardCustomLlmBody {
        this['url'] = url;
        return this;
    }
    public withApiKey(apiKey: string): AiguardCustomLlmBody {
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