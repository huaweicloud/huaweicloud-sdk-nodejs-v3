

export class RuleId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RuleId {
        this['id'] = id;
        return this;
    }
}