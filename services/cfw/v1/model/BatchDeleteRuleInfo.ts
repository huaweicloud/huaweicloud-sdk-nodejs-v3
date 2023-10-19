

export class BatchDeleteRuleInfo {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): BatchDeleteRuleInfo {
        this['name'] = name;
        return this;
    }
    public withId(id: string): BatchDeleteRuleInfo {
        this['id'] = id;
        return this;
    }
}