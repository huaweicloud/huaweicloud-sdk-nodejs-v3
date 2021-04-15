

export class UpdateSecurityGroupOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateSecurityGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateSecurityGroupOption {
        this['description'] = description;
        return this;
    }
}