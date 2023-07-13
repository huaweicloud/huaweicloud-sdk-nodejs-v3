

export class ShowAomMappingRuleRequest {
    private 'rule_id': string | undefined;
    public constructor(ruleId?: any) { 
        this['rule_id'] = ruleId;
    }
    public withRuleId(ruleId: string): ShowAomMappingRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
}