

export class CheckRuleFixValuesInfo {
    private 'rule_param_id'?: number;
    private 'fix_value'?: number;
    public constructor() { 
    }
    public withRuleParamId(ruleParamId: number): CheckRuleFixValuesInfo {
        this['rule_param_id'] = ruleParamId;
        return this;
    }
    public set ruleParamId(ruleParamId: number  | undefined) {
        this['rule_param_id'] = ruleParamId;
    }
    public get ruleParamId(): number | undefined {
        return this['rule_param_id'];
    }
    public withFixValue(fixValue: number): CheckRuleFixValuesInfo {
        this['fix_value'] = fixValue;
        return this;
    }
    public set fixValue(fixValue: number  | undefined) {
        this['fix_value'] = fixValue;
    }
    public get fixValue(): number | undefined {
        return this['fix_value'];
    }
}