

export class NeutronUpdateSecurityGroupOption {
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): NeutronUpdateSecurityGroupOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): NeutronUpdateSecurityGroupOption {
        this['name'] = name;
        return this;
    }
}