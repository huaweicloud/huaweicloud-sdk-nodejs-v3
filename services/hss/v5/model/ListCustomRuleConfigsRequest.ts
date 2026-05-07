

export class ListCustomRuleConfigsRequest {
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withRuleId(ruleId: string): ListCustomRuleConfigsRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): ListCustomRuleConfigsRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withOffset(offset: number): ListCustomRuleConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCustomRuleConfigsRequest {
        this['limit'] = limit;
        return this;
    }
}