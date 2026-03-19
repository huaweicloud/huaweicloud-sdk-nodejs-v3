import { BatchUpdateIpReputationRuleRequestBodyPolicyRuleIds } from './BatchUpdateIpReputationRuleRequestBodyPolicyRuleIds';
import { CreateIpReputationRuleRequestBodyAction } from './CreateIpReputationRuleRequestBodyAction';


export class BatchUpdateIpReputationRuleRequestBody {
    public name?: string;
    public description?: string;
    public action?: CreateIpReputationRuleRequestBodyAction;
    public type?: BatchUpdateIpReputationRuleRequestBodyTypeEnum | string;
    public tags?: Array<string>;
    private 'policy_rule_ids'?: Array<BatchUpdateIpReputationRuleRequestBodyPolicyRuleIds>;
    public constructor(name?: string, action?: CreateIpReputationRuleRequestBodyAction, type?: string, tags?: Array<string>, policyRuleIds?: Array<BatchUpdateIpReputationRuleRequestBodyPolicyRuleIds>) { 
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
    public withAction(action: CreateIpReputationRuleRequestBodyAction): BatchUpdateIpReputationRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withType(type: BatchUpdateIpReputationRuleRequestBodyTypeEnum | string): BatchUpdateIpReputationRuleRequestBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<string>): BatchUpdateIpReputationRuleRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<BatchUpdateIpReputationRuleRequestBodyPolicyRuleIds>): BatchUpdateIpReputationRuleRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<BatchUpdateIpReputationRuleRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<BatchUpdateIpReputationRuleRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateIpReputationRuleRequestBodyTypeEnum {
    IDC = 'idc'
}
