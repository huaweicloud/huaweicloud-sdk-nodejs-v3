

export class EnvironmentRequest {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): EnvironmentRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnvironmentRequest {
        this['description'] = description;
        return this;
    }
}