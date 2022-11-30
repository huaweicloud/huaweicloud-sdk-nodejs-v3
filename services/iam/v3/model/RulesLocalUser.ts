

export class RulesLocalUser {
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): RulesLocalUser {
        this['name'] = name;
        return this;
    }
}