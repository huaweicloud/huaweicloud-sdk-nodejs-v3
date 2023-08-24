

export class CheckRuleFixParamInfo {
    private 'rule_param_id'?: number;
    private 'rule_desc'?: string;
    private 'default_value'?: number;
    private 'range_min'?: number;
    private 'range_max'?: number;
    public constructor() { 
    }
    public withRuleParamId(ruleParamId: number): CheckRuleFixParamInfo {
        this['rule_param_id'] = ruleParamId;
        return this;
    }
    public set ruleParamId(ruleParamId: number  | undefined) {
        this['rule_param_id'] = ruleParamId;
    }
    public get ruleParamId(): number | undefined {
        return this['rule_param_id'];
    }
    public withRuleDesc(ruleDesc: string): CheckRuleFixParamInfo {
        this['rule_desc'] = ruleDesc;
        return this;
    }
    public set ruleDesc(ruleDesc: string  | undefined) {
        this['rule_desc'] = ruleDesc;
    }
    public get ruleDesc(): string | undefined {
        return this['rule_desc'];
    }
    public withDefaultValue(defaultValue: number): CheckRuleFixParamInfo {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: number  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): number | undefined {
        return this['default_value'];
    }
    public withRangeMin(rangeMin: number): CheckRuleFixParamInfo {
        this['range_min'] = rangeMin;
        return this;
    }
    public set rangeMin(rangeMin: number  | undefined) {
        this['range_min'] = rangeMin;
    }
    public get rangeMin(): number | undefined {
        return this['range_min'];
    }
    public withRangeMax(rangeMax: number): CheckRuleFixParamInfo {
        this['range_max'] = rangeMax;
        return this;
    }
    public set rangeMax(rangeMax: number  | undefined) {
        this['range_max'] = rangeMax;
    }
    public get rangeMax(): number | undefined {
        return this['range_max'];
    }
}