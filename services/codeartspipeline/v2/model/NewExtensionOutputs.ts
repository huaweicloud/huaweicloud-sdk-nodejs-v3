

export class NewExtensionOutputs {
    public name?: string;
    public type?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): NewExtensionOutputs {
        this['name'] = name;
        return this;
    }
    public withType(type: string): NewExtensionOutputs {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): NewExtensionOutputs {
        this['description'] = description;
        return this;
    }
}