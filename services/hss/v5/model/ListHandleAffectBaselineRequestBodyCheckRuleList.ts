

export class ListHandleAffectBaselineRequestBodyCheckRuleList {
    private 'check_name'?: string;
    private 'check_rule_id'?: string;
    public standard?: string;
    public constructor() { 
    }
    public withCheckName(checkName: string): ListHandleAffectBaselineRequestBodyCheckRuleList {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckRuleId(checkRuleId: string): ListHandleAffectBaselineRequestBodyCheckRuleList {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withStandard(standard: string): ListHandleAffectBaselineRequestBodyCheckRuleList {
        this['standard'] = standard;
        return this;
    }
}