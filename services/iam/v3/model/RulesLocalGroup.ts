

export class RulesLocalGroup {
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): RulesLocalGroup {
        this['name'] = name;
        return this;
    }
}