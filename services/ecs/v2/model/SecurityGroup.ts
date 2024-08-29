

export class SecurityGroup {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): SecurityGroup {
        this['name'] = name;
        return this;
    }
}