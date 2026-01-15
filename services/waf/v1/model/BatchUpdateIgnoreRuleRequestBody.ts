import { CreateCondition } from './CreateCondition';
import { IgnoreAdvanced } from './IgnoreAdvanced';
import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class BatchUpdateIgnoreRuleRequestBody {
    public domain?: Array<string>;
    public conditions?: Array<CreateCondition>;
    public mode?: number;
    public rule?: string;
    public advanced?: IgnoreAdvanced;
    public description?: string;
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor(domain?: Array<string>, conditions?: Array<CreateCondition>, mode?: number, rule?: string, policyRuleIds?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>) { 
        this['domain'] = domain;
        this['conditions'] = conditions;
        this['mode'] = mode;
        this['rule'] = rule;
        this['policy_rule_ids'] = policyRuleIds;
    }
    public withDomain(domain: Array<string>): BatchUpdateIgnoreRuleRequestBody {
        this['domain'] = domain;
        return this;
    }
    public withConditions(conditions: Array<CreateCondition>): BatchUpdateIgnoreRuleRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withMode(mode: number): BatchUpdateIgnoreRuleRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withRule(rule: string): BatchUpdateIgnoreRuleRequestBody {
        this['rule'] = rule;
        return this;
    }
    public withAdvanced(advanced: IgnoreAdvanced): BatchUpdateIgnoreRuleRequestBody {
        this['advanced'] = advanced;
        return this;
    }
    public withDescription(description: string): BatchUpdateIgnoreRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): BatchUpdateIgnoreRuleRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<PolicyRuleIdRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}