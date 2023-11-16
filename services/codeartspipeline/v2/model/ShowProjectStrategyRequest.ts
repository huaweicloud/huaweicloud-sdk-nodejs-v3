

export class ShowProjectStrategyRequest {
    private 'rule_set_id'?: string;
    public constructor(ruleSetId?: string) { 
        this['rule_set_id'] = ruleSetId;
    }
    public withRuleSetId(ruleSetId: string): ShowProjectStrategyRequest {
        this['rule_set_id'] = ruleSetId;
        return this;
    }
    public set ruleSetId(ruleSetId: string  | undefined) {
        this['rule_set_id'] = ruleSetId;
    }
    public get ruleSetId(): string | undefined {
        return this['rule_set_id'];
    }
}