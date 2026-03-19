import { BatchUpdateAntiTamperRulesRequestBodyPolicyRuleIds } from './BatchUpdateAntiTamperRulesRequestBodyPolicyRuleIds';


export class BatchUpdateAntiTamperRulesRequestBody {
    public name?: string;
    public hostname?: string;
    public url?: string;
    public description?: string;
    private 'policy_rule_ids'?: Array<BatchUpdateAntiTamperRulesRequestBodyPolicyRuleIds>;
    public constructor(hostname?: string, url?: string, policyRuleIds?: Array<BatchUpdateAntiTamperRulesRequestBodyPolicyRuleIds>) { 
        this['hostname'] = hostname;
        this['url'] = url;
        this['policy_rule_ids'] = policyRuleIds;
    }
    public withName(name: string): BatchUpdateAntiTamperRulesRequestBody {
        this['name'] = name;
        return this;
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
    public withPolicyRuleIds(policyRuleIds: Array<BatchUpdateAntiTamperRulesRequestBodyPolicyRuleIds>): BatchUpdateAntiTamperRulesRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<BatchUpdateAntiTamperRulesRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<BatchUpdateAntiTamperRulesRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}