

export class ConfigTemplateRuleSetInfo {
    public language?: string;
    public ruleSetId?: string;
    public constructor() { 
    }
    public withLanguage(language: string): ConfigTemplateRuleSetInfo {
        this['language'] = language;
        return this;
    }
    public withRuleSetId(ruleSetId: string): ConfigTemplateRuleSetInfo {
        this['ruleSetId'] = ruleSetId;
        return this;
    }
}