import { AomMappingRuleInfo } from './AomMappingRuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAomMappingRulesResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: string;
    private 'rule_info'?: AomMappingRuleInfo;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): UpdateAomMappingRulesResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRuleName(ruleName: string): UpdateAomMappingRulesResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: string): UpdateAomMappingRulesResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleInfo(ruleInfo: AomMappingRuleInfo): UpdateAomMappingRulesResponse {
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