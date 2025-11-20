

export class UpdateInstanceOption {
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateInstanceOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateInstanceOption {
        this['name'] = name;
        return this;
    }
}