

export class ModelItemResp {
    public id?: string;
    public name?: string;
    private 'provider_model_id'?: string;
    public input?: Array<string>;
    public description?: string;
    private 'is_builtin'?: boolean;
    public constructor() { 
    }
    public withId(id: string): ModelItemResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ModelItemResp {
        this['name'] = name;
        return this;
    }
    public withProviderModelId(providerModelId: string): ModelItemResp {
        this['provider_model_id'] = providerModelId;
        return this;
    }
    public set providerModelId(providerModelId: string  | undefined) {
        this['provider_model_id'] = providerModelId;
    }
    public get providerModelId(): string | undefined {
        return this['provider_model_id'];
    }
    public withInput(input: Array<string>): ModelItemResp {
        this['input'] = input;
        return this;
    }
    public withDescription(description: string): ModelItemResp {
        this['description'] = description;
        return this;
    }
    public withIsBuiltin(isBuiltin: boolean): ModelItemResp {
        this['is_builtin'] = isBuiltin;
        return this;
    }
    public set isBuiltin(isBuiltin: boolean  | undefined) {
        this['is_builtin'] = isBuiltin;
    }
    public get isBuiltin(): boolean | undefined {
        return this['is_builtin'];
    }
}