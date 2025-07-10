import { WorkflowTemplateConfigsVO } from './WorkflowTemplateConfigsVO';


export class WorkflowTemplateFlowsVO {
    public code?: string;
    public name?: string;
    private 'before_rule_validator'?: Array<WorkflowTemplateConfigsVO>;
    private 'before_rule_configs'?: Array<WorkflowTemplateConfigsVO>;
    private 'from_code'?: string;
    private 'to_code'?: string;
    public constructor() { 
    }
    public withCode(code: string): WorkflowTemplateFlowsVO {
        this['code'] = code;
        return this;
    }
    public withName(name: string): WorkflowTemplateFlowsVO {
        this['name'] = name;
        return this;
    }
    public withBeforeRuleValidator(beforeRuleValidator: Array<WorkflowTemplateConfigsVO>): WorkflowTemplateFlowsVO {
        this['before_rule_validator'] = beforeRuleValidator;
        return this;
    }
    public set beforeRuleValidator(beforeRuleValidator: Array<WorkflowTemplateConfigsVO>  | undefined) {
        this['before_rule_validator'] = beforeRuleValidator;
    }
    public get beforeRuleValidator(): Array<WorkflowTemplateConfigsVO> | undefined {
        return this['before_rule_validator'];
    }
    public withBeforeRuleConfigs(beforeRuleConfigs: Array<WorkflowTemplateConfigsVO>): WorkflowTemplateFlowsVO {
        this['before_rule_configs'] = beforeRuleConfigs;
        return this;
    }
    public set beforeRuleConfigs(beforeRuleConfigs: Array<WorkflowTemplateConfigsVO>  | undefined) {
        this['before_rule_configs'] = beforeRuleConfigs;
    }
    public get beforeRuleConfigs(): Array<WorkflowTemplateConfigsVO> | undefined {
        return this['before_rule_configs'];
    }
    public withFromCode(fromCode: string): WorkflowTemplateFlowsVO {
        this['from_code'] = fromCode;
        return this;
    }
    public set fromCode(fromCode: string  | undefined) {
        this['from_code'] = fromCode;
    }
    public get fromCode(): string | undefined {
        return this['from_code'];
    }
    public withToCode(toCode: string): WorkflowTemplateFlowsVO {
        this['to_code'] = toCode;
        return this;
    }
    public set toCode(toCode: string  | undefined) {
        this['to_code'] = toCode;
    }
    public get toCode(): string | undefined {
        return this['to_code'];
    }
}