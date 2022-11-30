

export class NovaRemoveSecurityGroupOption {
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): NovaRemoveSecurityGroupOption {
        this['name'] = name;
        return this;
    }
}