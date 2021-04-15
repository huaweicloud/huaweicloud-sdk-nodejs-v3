

export class NovaAddSecurityGroupOption {
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): NovaAddSecurityGroupOption {
        this['name'] = name;
        return this;
    }
}