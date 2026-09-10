

export class AgencyRole {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): AgencyRole {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AgencyRole {
        this['description'] = description;
        return this;
    }
}