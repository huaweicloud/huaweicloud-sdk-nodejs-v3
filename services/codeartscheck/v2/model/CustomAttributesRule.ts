import { RuleConfig } from './RuleConfig';


export class CustomAttributesRule {
    private 'rule_id'?: string;
    public value?: string;
    private 'rule_config_list'?: Array<RuleConfig>;
    public constructor() { 
    }
    public withRuleId(ruleId: string): CustomAttributesRule {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withValue(value: string): CustomAttributesRule {
        this['value'] = value;
        return this;
    }
    public withRuleConfigList(ruleConfigList: Array<RuleConfig>): CustomAttributesRule {
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