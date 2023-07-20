

export class RulesLocalUser {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): RulesLocalUser {
        this['name'] = name;
        return this;
    }
}