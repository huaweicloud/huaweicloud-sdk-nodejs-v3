

export class GovernanceUser {
    public type?: string;
    public name?: string;
    public constructor() { 
    }
    public withType(type: string): GovernanceUser {
        this['type'] = type;
        return this;
    }
    public withName(name: string): GovernanceUser {
        this['name'] = name;
        return this;
    }
}