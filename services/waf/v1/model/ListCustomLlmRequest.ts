

export class ListCustomLlmRequest {
    private 'Content-Type'?: string;
    public name?: string;
    private 'model_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListCustomLlmRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListCustomLlmRequest {
        this['name'] = name;
        return this;
    }
    public withModelName(modelName: string): ListCustomLlmRequest {
        this['model_name'] = modelName;
        return this;
    }
    public set modelName(modelName: string  | undefined) {
        this['model_name'] = modelName;
    }
    public get modelName(): string | undefined {
        return this['model_name'];
    }
    public withOffset(offset: number): ListCustomLlmRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCustomLlmRequest {
        this['limit'] = limit;
        return this;
    }
}