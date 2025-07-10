

export class ConfigRuleCompliance {
    private 'rule_name'?: string;
    public status?: string;
    public region?: string;
    private 'control_id'?: string;
    public constructor() { 
    }
    public withRuleName(ruleName: string): ConfigRuleCompliance {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withStatus(status: string): ConfigRuleCompliance {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): ConfigRuleCompliance {
        this['region'] = region;
        return this;
    }
    public withControlId(controlId: string): ConfigRuleCompliance {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
}