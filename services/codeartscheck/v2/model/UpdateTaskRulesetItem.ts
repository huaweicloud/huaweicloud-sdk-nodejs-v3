

export class UpdateTaskRulesetItem {
    public language?: string;
    private 'rule_set_id'?: string;
    private 'if_use'?: string;
    public status?: string;
    public constructor(language?: string, ruleSetId?: string, ifUse?: string, status?: string) { 
        this['language'] = language;
        this['rule_set_id'] = ruleSetId;
        this['if_use'] = ifUse;
        this['status'] = status;
    }
    public withLanguage(language: string): UpdateTaskRulesetItem {
        this['language'] = language;
        return this;
    }
    public withRuleSetId(ruleSetId: string): UpdateTaskRulesetItem {
        this['rule_set_id'] = ruleSetId;
        return this;
    }
    public set ruleSetId(ruleSetId: string  | undefined) {
        this['rule_set_id'] = ruleSetId;
    }
    public get ruleSetId(): string | undefined {
        return this['rule_set_id'];
    }
    public withIfUse(ifUse: string): UpdateTaskRulesetItem {
        this['if_use'] = ifUse;
        return this;
    }
    public set ifUse(ifUse: string  | undefined) {
        this['if_use'] = ifUse;
    }
    public get ifUse(): string | undefined {
        return this['if_use'];
    }
    public withStatus(status: string): UpdateTaskRulesetItem {
        this['status'] = status;
        return this;
    }
}