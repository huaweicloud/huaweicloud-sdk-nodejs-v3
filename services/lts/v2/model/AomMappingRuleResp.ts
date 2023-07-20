import { AomMappingRuleInfo } from './AomMappingRuleInfo';


export class AomMappingRuleResp {
    private 'project_id'?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: string;
    private 'rule_info'?: AomMappingRuleInfo;
    public constructor(projectId?: string, ruleName?: string, ruleId?: string, ruleInfo?: AomMappingRuleInfo) { 
        this['project_id'] = projectId;
        this['rule_name'] = ruleName;
        this['rule_id'] = ruleId;
        this['rule_info'] = ruleInfo;
    }
    public withProjectId(projectId: string): AomMappingRuleResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRuleName(ruleName: string): AomMappingRuleResp {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: string): AomMappingRuleResp {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleInfo(ruleInfo: AomMappingRuleInfo): AomMappingRuleResp {
        this['rule_info'] = ruleInfo;
        return this;
    }
    public set ruleInfo(ruleInfo: AomMappingRuleInfo  | undefined) {
        this['rule_info'] = ruleInfo;
    }
    public get ruleInfo(): AomMappingRuleInfo | undefined {
        return this['rule_info'];
    }
}