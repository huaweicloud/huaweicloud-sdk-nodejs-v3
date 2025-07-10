

export class ExternalConfigRuleCompliance {
    private 'rule_name'?: string;
    public status?: string;
    private 'control_id'?: string;
    public constructor() { 
    }
    public withRuleName(ruleName: string): ExternalConfigRuleCompliance {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withStatus(status: string): ExternalConfigRuleCompliance {
        this['status'] = status;
        return this;
    }
    public withControlId(controlId: string): ExternalConfigRuleCompliance {
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