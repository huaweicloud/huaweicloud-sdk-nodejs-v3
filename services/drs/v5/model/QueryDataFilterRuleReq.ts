

export class QueryDataFilterRuleReq {
    private 'filter_type'?: string;
    private 'is_all_rules'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor(filterType?: string) { 
        this['filter_type'] = filterType;
    }
    public withFilterType(filterType: string): QueryDataFilterRuleReq {
        this['filter_type'] = filterType;
        return this;
    }
    public set filterType(filterType: string  | undefined) {
        this['filter_type'] = filterType;
    }
    public get filterType(): string | undefined {
        return this['filter_type'];
    }
    public withIsAllRules(isAllRules: boolean): QueryDataFilterRuleReq {
        this['is_all_rules'] = isAllRules;
        return this;
    }
    public set isAllRules(isAllRules: boolean  | undefined) {
        this['is_all_rules'] = isAllRules;
    }
    public get isAllRules(): boolean | undefined {
        return this['is_all_rules'];
    }
    public withLimit(limit: number): QueryDataFilterRuleReq {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): QueryDataFilterRuleReq {
        this['offset'] = offset;
        return this;
    }
}