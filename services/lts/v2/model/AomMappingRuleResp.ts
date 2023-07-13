import { AomMappingRuleInfo } from './AomMappingRuleInfo';


export class AomMappingRuleResp {
    private 'project_id': string | undefined;
    private 'rule_name': string | undefined;
    private 'rule_id': string | undefined;
    private 'rule_info': AomMappingRuleInfo | undefined;
    public constructor(projectId?: any, ruleName?: any, ruleId?: any, ruleInfo?: any) { 
        this['project_id'] = projectId;
        this['rule_name'] = ruleName;
        this['rule_id'] = ruleId;
        this['rule_info'] = ruleInfo;
    }
    public withProjectId(projectId: string): AomMappingRuleResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withRuleName(ruleName: string): AomMappingRuleResp {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName() {
        return this['rule_name'];
    }
    public withRuleId(ruleId: string): AomMappingRuleResp {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withRuleInfo(ruleInfo: AomMappingRuleInfo): AomMappingRuleResp {
        this['rule_info'] = ruleInfo;
        return this;
    }
    public set ruleInfo(ruleInfo: AomMappingRuleInfo | undefined) {
        this['rule_info'] = ruleInfo;
    }
    public get ruleInfo() {
        return this['rule_info'];
    }
}