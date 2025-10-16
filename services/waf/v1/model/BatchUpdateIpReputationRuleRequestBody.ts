import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';
import { UpdateIpReputationRuleRequestBodyAction } from './UpdateIpReputationRuleRequestBodyAction';


export class BatchUpdateIpReputationRuleRequestBody {
    public name?: string;
    public policyname?: string;
    public description?: string;
    public action?: UpdateIpReputationRuleRequestBodyAction;
    public type?: string;
    public tags?: Array<string>;
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor() { 
    }
    public withName(name: string): BatchUpdateIpReputationRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withPolicyname(policyname: string): BatchUpdateIpReputationRuleRequestBody {
        this['policyname'] = policyname;
        return this;
    }
    public withDescription(description: string): BatchUpdateIpReputationRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withAction(action: UpdateIpReputationRuleRequestBodyAction): BatchUpdateIpReputationRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withType(type: string): BatchUpdateIpReputationRuleRequestBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): BatchUpdateIpReputationRuleRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): BatchUpdateIpReputationRuleRequestBody {
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