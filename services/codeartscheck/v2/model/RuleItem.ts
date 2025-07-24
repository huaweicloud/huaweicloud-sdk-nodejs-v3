import { RuleConfig } from './RuleConfig';


export class RuleItem {
    private 'rule_id'?: string;
    private 'rule_language'?: string;
    private 'rule_name'?: string;
    private 'rule_severity'?: string;
    private 'rule_tages'?: string;
    public checked?: string;
    private 'rule_config_list'?: Array<RuleConfig>;
    public constructor() { 
    }
    public withRuleId(ruleId: string): RuleItem {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleLanguage(ruleLanguage: string): RuleItem {
        this['rule_language'] = ruleLanguage;
        return this;
    }
    public set ruleLanguage(ruleLanguage: string  | undefined) {
        this['rule_language'] = ruleLanguage;
    }
    public get ruleLanguage(): string | undefined {
        return this['rule_language'];
    }
    public withRuleName(ruleName: string): RuleItem {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleSeverity(ruleSeverity: string): RuleItem {
        this['rule_severity'] = ruleSeverity;
        return this;
    }
    public set ruleSeverity(ruleSeverity: string  | undefined) {
        this['rule_severity'] = ruleSeverity;
    }
    public get ruleSeverity(): string | undefined {
        return this['rule_severity'];
    }
    public withRuleTages(ruleTages: string): RuleItem {
        this['rule_tages'] = ruleTages;
        return this;
    }
    public set ruleTages(ruleTages: string  | undefined) {
        this['rule_tages'] = ruleTages;
    }
    public get ruleTages(): string | undefined {
        return this['rule_tages'];
    }
    public withChecked(checked: string): RuleItem {
        this['checked'] = checked;
        return this;
    }
    public withRuleConfigList(ruleConfigList: Array<RuleConfig>): RuleItem {
        this['rule_config_list'] = ruleConfigList;
        return this;
    }
    public set ruleConfigList(ruleConfigList: Array<RuleConfig>  | undefined) {
        this['rule_config_list'] = ruleConfigList;
    }
    public get ruleConfigList(): Array<RuleConfig> | undefined {
        return this['rule_config_list'];
    }
}