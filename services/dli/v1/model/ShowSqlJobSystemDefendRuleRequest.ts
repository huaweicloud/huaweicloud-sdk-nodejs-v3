

export class ShowSqlJobSystemDefendRuleRequest {
    private 'rule_id'?: string;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withRuleId(ruleId: string): ShowSqlJobSystemDefendRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
}