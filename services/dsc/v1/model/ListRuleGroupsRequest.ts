

export class ListRuleGroupsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListRuleGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRuleGroupsRequest {
        this['limit'] = limit;
        return this;
    }
}