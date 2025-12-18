

export class AgencyRoleResult {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): AgencyRoleResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AgencyRoleResult {
        this['description'] = description;
        return this;
    }
}