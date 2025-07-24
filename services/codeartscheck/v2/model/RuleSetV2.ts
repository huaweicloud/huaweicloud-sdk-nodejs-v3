

export class RuleSetV2 {
    private 'ruleset_id'?: string;
    public language?: string;
    public constructor(language?: string) { 
        this['language'] = language;
    }
    public withRulesetId(rulesetId: string): RuleSetV2 {
        this['ruleset_id'] = rulesetId;
        return this;
    }
    public set rulesetId(rulesetId: string  | undefined) {
        this['ruleset_id'] = rulesetId;
    }
    public get rulesetId(): string | undefined {
        return this['ruleset_id'];
    }
    public withLanguage(language: string): RuleSetV2 {
        this['language'] = language;
        return this;
    }
}