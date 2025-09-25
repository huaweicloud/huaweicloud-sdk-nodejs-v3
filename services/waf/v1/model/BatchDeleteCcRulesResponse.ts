import { PolicyRuleIdResponseBodyPolicyRuleIds } from './PolicyRuleIdResponseBodyPolicyRuleIds';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteCcRulesResponse extends SdkResponse {
    private 'policy_rule_ids'?: Array<PolicyRuleIdResponseBodyPolicyRuleIds>;
    public constructor() { 
        super();
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdResponseBodyPolicyRuleIds>): BatchDeleteCcRulesResponse {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<PolicyRuleIdResponseBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<PolicyRuleIdResponseBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}