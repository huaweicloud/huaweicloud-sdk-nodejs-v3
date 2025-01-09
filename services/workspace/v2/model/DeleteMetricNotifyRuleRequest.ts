

export class DeleteMetricNotifyRuleRequest {
    private 'rule_id'?: string;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withRuleId(ruleId: string): DeleteMetricNotifyRuleRequest {
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