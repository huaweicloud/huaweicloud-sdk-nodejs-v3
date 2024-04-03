

export class UseRuleVO {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): UseRuleVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UseRuleVO {
        this['name'] = name;
        return this;
    }
}