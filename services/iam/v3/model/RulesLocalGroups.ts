

export class RulesLocalGroups {
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): RulesLocalGroups {
        this['name'] = name;
        return this;
    }
}