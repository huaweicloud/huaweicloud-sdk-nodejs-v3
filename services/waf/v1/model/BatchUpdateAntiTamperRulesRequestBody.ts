import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class BatchUpdateAntiTamperRulesRequestBody {
    public hostname?: string;
    public url?: string;
    public description?: string;
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor(hostname?: string, url?: string, policyRuleIds?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>) { 
        this['hostname'] = hostname;
        this['url'] = url;
        this['policy_rule_ids'] = policyRuleIds;
    }
    public withHostname(hostname: string): BatchUpdateAntiTamperRulesRequestBody {
        this['hostname'] = hostname;
        return this;
    }
    public withUrl(url: string): BatchUpdateAntiTamperRulesRequestBody {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): BatchUpdateAntiTamperRulesRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): BatchUpdateAntiTamperRulesRequestBody {
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