

export class UpdateIpGroupOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateIpGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateIpGroupOption {
        this['description'] = description;
        return this;
    }
}