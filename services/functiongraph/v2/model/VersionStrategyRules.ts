

export class VersionStrategyRules {
    private 'rule_type'?: VersionStrategyRulesRuleTypeEnum | string;
    public param?: string;
    public op?: VersionStrategyRulesOpEnum | string;
    public value?: string;
    public constructor() { 
    }
    public withRuleType(ruleType: VersionStrategyRulesRuleTypeEnum | string): VersionStrategyRules {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: VersionStrategyRulesRuleTypeEnum | string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): VersionStrategyRulesRuleTypeEnum | string | undefined {
        return this['rule_type'];
    }
    public withParam(param: string): VersionStrategyRules {
        this['param'] = param;
        return this;
    }
    public withOp(op: VersionStrategyRulesOpEnum | string): VersionStrategyRules {
        this['op'] = op;
        return this;
    }
    public withValue(value: string): VersionStrategyRules {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VersionStrategyRulesRuleTypeEnum {
    HEADER = 'header',
    COOKIE = 'cookie'
}
/**
    * @export
    * @enum {string}
    */
export enum VersionStrategyRulesOpEnum {
    IN = 'in',
    Equal = '='
}
