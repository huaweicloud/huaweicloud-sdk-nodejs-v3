import { BatchUpdateIpReputationRuleRequestBodyAction } from './BatchUpdateIpReputationRuleRequestBodyAction';
import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class BatchUpdateIpReputationRuleRequestBody {
    public name?: string;
    public description?: string;
    public action?: BatchUpdateIpReputationRuleRequestBodyAction;
    public type?: string;
    public tags?: Array<string>;
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor(name?: string, action?: BatchUpdateIpReputationRuleRequestBodyAction, type?: string, tags?: Array<string>, policyRuleIds?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>) { 
        this['name'] = name;
        this['action'] = action;
        this['type'] = type;
        this['tags'] = tags;
        this['policy_rule_ids'] = policyRuleIds;
    }
    public withName(name: string): BatchUpdateIpReputationRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BatchUpdateIpReputationRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withAction(action: BatchUpdateIpReputationRuleRequestBodyAction): BatchUpdateIpReputationRuleRequestBody {
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