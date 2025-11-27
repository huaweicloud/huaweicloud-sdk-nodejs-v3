

export class ListRuleRequest {
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListRuleRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ListRuleRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListRuleRequest {
        this['order'] = order;
        return this;
    }
}