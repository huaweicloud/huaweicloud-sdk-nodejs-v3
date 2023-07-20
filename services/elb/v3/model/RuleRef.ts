

export class RuleRef {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): RuleRef {
        this['id'] = id;
        return this;
    }
}