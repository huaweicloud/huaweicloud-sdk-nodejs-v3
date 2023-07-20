

export class RulesLocalGroup {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): RulesLocalGroup {
        this['name'] = name;
        return this;
    }
}