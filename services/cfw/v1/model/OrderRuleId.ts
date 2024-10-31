

export class OrderRuleId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): OrderRuleId {
        this['id'] = id;
        return this;
    }
}