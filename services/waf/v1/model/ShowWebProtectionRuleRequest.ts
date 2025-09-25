

export class ShowWebProtectionRuleRequest {
    private 'X-Language'?: string;
    private 'rule_id'?: string;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withXLanguage(xLanguage: string): ShowWebProtectionRuleRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withRuleId(ruleId: string): ShowWebProtectionRuleRequest {
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