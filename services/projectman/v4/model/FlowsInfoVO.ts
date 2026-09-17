import { WorkItemFlowRuleConfigVO } from './WorkItemFlowRuleConfigVO';


export class FlowsInfoVO {
    public code?: string;
    public name?: string;
    public description?: string;
    private 'extra_config'?: Array<{ [key: string]: object; }>;
    private 'from_code'?: string;
    private 'to_code'?: string;
    private 'before_rule_configs'?: Array<WorkItemFlowRuleConfigVO>;
    private 'before_rule_validator'?: Array<string>;
    private 'after_rule_configs'?: Array<WorkItemFlowRuleConfigVO>;
    public constructor() { 
    }
    public withCode(code: string): FlowsInfoVO {
        this['code'] = code;
        return this;
    }
    public withName(name: string): FlowsInfoVO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): FlowsInfoVO {
        this['description'] = description;
        return this;
    }
    public withExtraConfig(extraConfig: Array<{ [key: string]: object; }>): FlowsInfoVO {
        this['extra_config'] = extraConfig;
        return this;
    }
    public set extraConfig(extraConfig: Array<{ [key: string]: object; }>  | undefined) {
        this['extra_config'] = extraConfig;
    }
    public get extraConfig(): Array<{ [key: string]: object; }> | undefined {
        return this['extra_config'];
    }
    public withFromCode(fromCode: string): FlowsInfoVO {
        this['from_code'] = fromCode;
        return this;
    }
    public set fromCode(fromCode: string  | undefined) {
        this['from_code'] = fromCode;
    }
    public get fromCode(): string | undefined {
        return this['from_code'];
    }
    public withToCode(toCode: string): FlowsInfoVO {
        this['to_code'] = toCode;
        return this;
    }
    public set toCode(toCode: string  | undefined) {
        this['to_code'] = toCode;
    }
    public get toCode(): string | undefined {
        return this['to_code'];
    }
    public withBeforeRuleConfigs(beforeRuleConfigs: Array<WorkItemFlowRuleConfigVO>): FlowsInfoVO {
        this['before_rule_configs'] = beforeRuleConfigs;
        return this;
    }
    public set beforeRuleConfigs(beforeRuleConfigs: Array<WorkItemFlowRuleConfigVO>  | undefined) {
        this['before_rule_configs'] = beforeRuleConfigs;
    }
    public get beforeRuleConfigs(): Array<WorkItemFlowRuleConfigVO> | undefined {
        return this['before_rule_configs'];
    }
    public withBeforeRuleValidator(beforeRuleValidator: Array<string>): FlowsInfoVO {
        this['before_rule_validator'] = beforeRuleValidator;
        return this;
    }
    public set beforeRuleValidator(beforeRuleValidator: Array<string>  | undefined) {
        this['before_rule_validator'] = beforeRuleValidator;
    }
    public get beforeRuleValidator(): Array<string> | undefined {
        return this['before_rule_validator'];
    }
    public withAfterRuleConfigs(afterRuleConfigs: Array<WorkItemFlowRuleConfigVO>): FlowsInfoVO {
        this['after_rule_configs'] = afterRuleConfigs;
        return this;
    }
    public set afterRuleConfigs(afterRuleConfigs: Array<WorkItemFlowRuleConfigVO>  | undefined) {
        this['after_rule_configs'] = afterRuleConfigs;
    }
    public get afterRuleConfigs(): Array<WorkItemFlowRuleConfigVO> | undefined {
        return this['after_rule_configs'];
    }
}