

export class NeutronCreateSecurityGroupOption {
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): NeutronCreateSecurityGroupOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): NeutronCreateSecurityGroupOption {
        this['name'] = name;
        return this;
    }
}