

export class NovaServerSecurityGroup {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): NovaServerSecurityGroup {
        this['name'] = name;
        return this;
    }
}