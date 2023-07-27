

export class SecurityGroups {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): SecurityGroups {
        this['name'] = name;
        return this;
    }
}