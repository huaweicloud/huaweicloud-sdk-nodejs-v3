

export class UpdateModelGroupReq {
    public name?: string;
    public description?: string;
    public priority?: number;
    private 'default_model_id'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateModelGroupReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateModelGroupReq {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): UpdateModelGroupReq {
        this['priority'] = priority;
        return this;
    }
    public withDefaultModelId(defaultModelId: string): UpdateModelGroupReq {
        this['default_model_id'] = defaultModelId;
        return this;
    }
    public set defaultModelId(defaultModelId: string  | undefined) {
        this['default_model_id'] = defaultModelId;
    }
    public get defaultModelId(): string | undefined {
        return this['default_model_id'];
    }
}