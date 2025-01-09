

export class ListRestrictedRuleRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListRestrictedRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRestrictedRuleRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListRestrictedRuleRequest {
        this['name'] = name;
        return this;
    }
}