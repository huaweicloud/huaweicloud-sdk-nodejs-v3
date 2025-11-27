

export class CreateRuleObjectMeta {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateRuleObjectMeta {
        this['name'] = name;
        return this;
    }
}