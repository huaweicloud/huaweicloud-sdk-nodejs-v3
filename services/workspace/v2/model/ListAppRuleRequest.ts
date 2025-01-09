

export class ListAppRuleRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListAppRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppRuleRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListAppRuleRequest {
        this['name'] = name;
        return this;
    }
}