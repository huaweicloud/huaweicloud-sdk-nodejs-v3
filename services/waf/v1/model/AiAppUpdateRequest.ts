

export class AiAppUpdateRequest {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): AiAppUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiAppUpdateRequest {
        this['description'] = description;
        return this;
    }
}