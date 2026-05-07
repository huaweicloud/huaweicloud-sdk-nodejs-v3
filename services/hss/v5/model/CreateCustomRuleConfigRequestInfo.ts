import { CustomRuleConfigRequestInfo } from './CustomRuleConfigRequestInfo';
import { CustomRuleValueInfo } from './CustomRuleValueInfo';


export class CreateCustomRuleConfigRequestInfo {
    private 'rule_name'?: string;
    private 'is_all_host'?: boolean;
    private 'custom_rule_value_info'?: CustomRuleValueInfo;
    private 'agent_ids'?: Array<string>;
    public constructor(ruleName?: string, customRuleValueInfo?: CustomRuleValueInfo) { 
        this['rule_name'] = ruleName;
        this['custom_rule_value_info'] = customRuleValueInfo;
    }
    public withRuleName(ruleName: string): CreateCustomRuleConfigRequestInfo {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withIsAllHost(isAllHost: boolean): CreateCustomRuleConfigRequestInfo {
        this['is_all_host'] = isAllHost;
        return this;
    }
    public set isAllHost(isAllHost: boolean  | undefined) {
        this['is_all_host'] = isAllHost;
    }
    public get isAllHost(): boolean | undefined {
        return this['is_all_host'];
    }
    public withCustomRuleValueInfo(customRuleValueInfo: CustomRuleValueInfo): CreateCustomRuleConfigRequestInfo {
        this['custom_rule_value_info'] = customRuleValueInfo;
        return this;
    }
    public set customRuleValueInfo(customRuleValueInfo: CustomRuleValueInfo  | undefined) {
        this['custom_rule_value_info'] = customRuleValueInfo;
    }
    public get customRuleValueInfo(): CustomRuleValueInfo | undefined {
        return this['custom_rule_value_info'];
    }
    public withAgentIds(agentIds: Array<string>): CreateCustomRuleConfigRequestInfo {
        this['agent_ids'] = agentIds;
        return this;
    }
    public set agentIds(agentIds: Array<string>  | undefined) {
        this['agent_ids'] = agentIds;
    }
    public get agentIds(): Array<string> | undefined {
        return this['agent_ids'];
    }
}