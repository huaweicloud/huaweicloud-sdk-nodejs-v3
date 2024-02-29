

export class RuleId {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): RuleId {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RuleId {
        this['name'] = name;
        return this;
    }
}