import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class PolicyRuleIdRequestBody {
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor() { 
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): PolicyRuleIdRequestBody {
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