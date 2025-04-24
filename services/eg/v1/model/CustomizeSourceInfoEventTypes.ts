

export class CustomizeSourceInfoEventTypes {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): CustomizeSourceInfoEventTypes {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CustomizeSourceInfoEventTypes {
        this['description'] = description;
        return this;
    }
}